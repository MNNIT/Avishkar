import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  title: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16
  }
};
const AddedTeammates = ({ members, deleteMember, classes }) => {
  if (members.length === 0) {
    return "";
  }
  return (
    <div>
      <Typography className={classes.title} color="textSecondary">
        Teammates
      </Typography>
      {members.map((member, index) => {
        return (
          <Chip
            className="chip"
            label={member}
            key={member}
            onDelete={() => deleteMember(index)}
          />
        );
      })}
    </div>
  );
};
export default withStyles(styles)(AddedTeammates);
