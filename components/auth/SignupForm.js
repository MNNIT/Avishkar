import React, { Component } from "react";
// import axios from "../../axios";
import axios from "axios";
import baseURL from "../../config";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default class extends Component {
  state = {
    formData: {
      email: "",
      name: "",
      password: "",
      phone: "",
      college: "",
      city: "",
      year: "",
      code: ""
    },
    errors: {
      password: false,
      email: false
    },
    errorMsg: {
      email: ""
    },
    referral: { message: "", color: "" },
    loading: false
  };
  emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,} ?$/gim;
  displayFieldError = field => {
    const { errors } = this.state;
    errors[field] = true;
    this.setState({
      errors
    });
  };
  removeFieldError = field => {
    const { errors } = this.state;
    errors[field] = false;
    this.setState({
      errors
    });
  };
  updateField = (e, field) => {
    const formData = { ...this.state.formData };
    formData[field] = e.target.value;
    this.setState({ formData });
  };
  submitForm = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = { ...this.state.formData };
    const match = formData.email.match(this.emailRegex);
    if (match) {
      axios
        .post("/api/signup", formData)
        .then(res => {
          this.setState({ loading: false });
          if (res.data.success) {
            //email is sent to user on server
            alert(res.data.message);
            //redirect to /dashboard
            // window.location.replace("/dashboard");
          } else if (!res.data.success) {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.setState({ loading: false });
          alert("something went wrong!");
        });
    } else {
      this.setState({
        errors: { password: this.state.errors.password, email: true },
        errorMsg: { email: "Email is Not Valid" }
      });
    }
  };
  onBlur = field => {
    const { formData } = this.state;
    if (field === "password") {
      if (formData.password.length < 6) {
        this.displayFieldError(field);
      } else {
        this.removeFieldError(field);
      }
    } else if (field === "email") {
      const formData = { ...this.state.formData };
      const match = formData.email.match(this.emailRegex);
      console.log("test", match);
      if (!match) {
        this.setState({ errorMsg: { email: "Email is not Valid" } });
      } else {
        this.setState({ errorMsg: { email: "" } });
      }
      this.displayFieldError(field);
    }
  };
  isEmailTaken = () => {
    const { email } = this.state.formData;
    axios.get(`/`);
  };

  render() {
    const { formData, errors, referral, errorMsg } = this.state;
    return (
      <div className="form-container">
        <form>
          <label>EMAIL</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => {
              this.updateField(e, "email");
            }}
            onBlur={() => {
              this.onBlur("email");
            }}
            required
          />
          <p>{errors.email ? errorMsg.email : " "}</p>
          <label>NAME</label>
          <input
            type="text"
            value={formData.name}
            onChange={e => {
              this.updateField(e, "name");
            }}
            required
          />
          <p> </p>
          <label>PASSWORD</label>
          <input
            type="password"
            value={formData.password}
            onChange={e => {
              this.updateField(e, "password");
            }}
            onBlur={() => {
              this.onBlur("password");
            }}
            required
          />
          <p>
            {errors.password ? "Password should contain min 6 characters" : " "}
          </p>

          <button
            type="submit"
            onClick={this.submitForm}
            disabled={this.state.loading}
          >
            {this.state.loading ? "SUBMITTING" : "SIGN UP"}
          </button>
        </form>
        <style jsx>
          {`
            div.form-container {
              padding: 30px;
              width: 100%;
              box-sizing: border-box;
            }
            input {
              display: block;
              width: 100%;
              margin: 10px 0px;
              height: 40px;
              padding: 0px 10px;
              outline: none;
              box-sizing: border-box;
              border-radius: 3px;
              border: 2px solid #e0e0e0;
              transition: all 0.5s;
            }
            input:focus {
              border: 2px solid #f48fb1;
            }
            label {
              color: #424242;
            }
            button {
              background-color: #e91e63;
              outline: none;
              border: none;
              color: white;
              padding: 10px 15px;
              border-radius: 3px;
              font-family: "Source Sans Pro", sans-serif;
              margin-top: 5px;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    );
  }
}
