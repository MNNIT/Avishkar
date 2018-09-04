import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import ToggleDisplay from "react-toggle-display";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});
export default withStyles(styles)(function({
  profile,
  toggleProfileForm,
  classes
}) {
  if (profile) {
    return (
      <div className="profile-container">
        <div className="data">
          <Paper className={classes.root} elevation={1}>
            <div className="row center-md center-xs center-lg">
              <div className="img-container">
                {/* <img src="/static/icon/male.png" alt="Profile Image" /> */}
                {(function() {
                  if (!profile.picture) {
                    return (
                      <img src="/static/icon/male.png" alt="Profile Image" />
                    );
                  } else {
                    return (
                      <div
                        style={{
                          height: "120px",
                          width: "120px",
                          borderRadius: "50%",
                          overflow: "hidden"
                        }}
                        className="img-cont"
                      >
                        <img src={profile.picture} alt="Profile Image" />
                      </div>
                    );
                  }
                })()}
                {/* <img
                  src={profile.photo}
                  onerror="this.onerror=null;this.src='/static/icon/male.png';"
                  alt="Profile Image"
                /> */}
              </div>
            </div>
            <h2>
              Name :&nbsp;
              {profile.name}
            </h2>
            <p>
              <b>Email</b> :&nbsp;
              {profile.email}
            </p>
            <p>
              <b>Gender</b> :&nbsp;
              {profile.gender}
            </p>
            <p>
              <b>College</b> :&nbsp;
              {profile.college}
            </p>
            <ToggleDisplay hide={profile.updatedProfile}>
              <Button
                color="primary"
                variant="contained"
                onClick={toggleProfileForm}
                style={{ margin: "auto" }}
              >
                UPDATE PROFILE
              </Button>
            </ToggleDisplay>
          </Paper>
        </div>

        <style jsx>
          {`
            div.img-container {
              width: 120px;
              height: 120px;
              margin-top: -70px;
            }
            img {
              width: 100%;
              height: auto;
            }
            div.profile-container {
              width: 80%;
              margin: auto;
              margin-top: 100px;
              box-sizing: border-box;
            }
            @media (max-width: 700px) {
              div.profile-container {
                width: 100%;
                margin: 0;
                margin-top: 20px;
              }
              div.img-container {
                margin-top: 0px;
              }
              div.row {
                margin: 0px;
              }
            }
          `}
        </style>
      </div>
    );
  } else {
    return <div>Login/Signup again or Profile doesn't exist/deleted!</div>;
  }
});
