import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import CustomLoader from "../CustomLoader";

export default ({ registeredEvents, loading }) => {
  if (loading) {
    return <CustomLoader />;
  } else if (registeredEvents.length === 0) {
    return "Not registered for any events";
  }
  return (
    <div>
      {registeredEvents.map(function(event) {
        return (
          <List>
            <ListItem>
              <ListItemText primary={event.displayName} />
            </ListItem>
            <Divider />
          </List>
        );
      })}
    </div>
  );
};
