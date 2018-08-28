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
  return (
    <div className="profile-container">
      <div className="row center-md center-xs center-lg">
        <div className="img-container">
          <img src="/static/icon/male.png" alt="Profile Image" />
        </div>
      </div>
      <div className="data">
        <Paper className={classes.root} elevation={1}>
          <p>
            Name :&nbsp;
            {profile.name}
          </p>
          <p>
            Email :&nbsp;
            {profile.email}
          </p>
          <p>
            Gender :&nbsp;
            {profile.gender}
          </p>
          <p>
            College :&nbsp;
            {profile.college}
          </p>
        </Paper>
        <br />
        <ToggleDisplay hide={profile.updatedProfile}>
          <Button
            color="primary"
            variant="contained"
            onClick={toggleProfileForm}
          >
            UPDATE PROFILE
          </Button>
        </ToggleDisplay>
      </div>

      <style jsx>
        {`
          div.img-container {
            width: 120px;
            height: auto;
          }
          img {
            width: 100%;
            height: auto;
            margin-top: -80px;
          }
          div.profile-container {
            width: 80%;
            margin: auto;
            margin-top: 100px;
            box-sizing: border-box;
            border-radius: 4px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
              0 3px 6px rgba(0, 0, 0, 0.23);
            padding: 20px;
            background-color: tomato;
          }
          div.data {
            padding: 10px 20px 10px 20px;
          }
        `}
      </style>
    </div>
  );
});
