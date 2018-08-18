import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import url from "../../config";
axios.defaults.baseURL = url;

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
    referral: { message: "", color: "" },
    loading: false
  };
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
    axios
      .post("/api/signup", formData)
      .then(res => {
        console.log(res.data);
        if (res.data.success) {
          //redirect to /dashboard
          window.location.replace("/dashboard");
        }
      })
      .catch(err => {
        this.setState({ loading: false });
        alert("something went wrong!");
      });
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
    }
  };
  isEmailTaken = () => {
    const { email } = this.state.formData;
    axios.get(`/`);
  };
  checkReferralCode = () => {
    const { code } = this.state.formData;
    if (code.trim().length === 0) {
      this.setState({ referral: { message: "", color: "" } });
    }
    axios
      .get(`/api/referral/${code}`)
      .then(res => {
        const { data } = res;
        if (data.success) {
          this.setState({
            referral: { message: data.message, color: "green" }
          });
        } else {
          this.setState({ referral: { message: data.message, color: "red" } });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { formData, errors, referral } = this.state;
    return (
      <div className="form-container">
        <form action="">
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
          <p>{errors.email ? "This email is already taken!" : " "}</p>
          <label>FULL NAME</label>
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
          <label>PHONE</label>
          <input
            type="text"
            value={formData.phone}
            onChange={e => {
              this.updateField(e, "phone");
            }}
            required
          />
          <p> </p>
          <label>COLLEGE</label>
          <input
            type="text"
            value={formData.college}
            onChange={e => {
              this.updateField(e, "college");
            }}
            required
          />
          <p> </p>
          <label>CITY</label>
          <input
            type="text"
            value={formData.city}
            onChange={e => {
              this.updateField(e, "city");
            }}
            required
          />
          <p> </p>
          <label>YEAR</label>
          <input
            type="text"
            value={formData.year}
            onChange={e => {
              this.updateField(e, "year");
            }}
            required
          />
          <p> </p>
          <label>REFERRAL CODE (OPTIONAL)</label>
          <input
            type="text"
            value={formData.code}
            onChange={e => {
              this.updateField(e, "code");
            }}
            onBlur={this.checkReferralCode}
            required
          />
          <p style={{ color: referral.color }}>{referral.message}</p>
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
