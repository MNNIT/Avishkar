import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export default ({ registeredEvents, loading }) => {
  if (loading) {
    return <p> Loading</p>;
  } else if (registeredEvents.length === 0) {
    return "Not registered for any events";
  }
  return (
    <div>
      {registeredEvents.map(function(event) {
        return (
          <List>
            <ListItem>
              <ListItemText primary={event} />
            </ListItem>
            <Divider />
          </List>
        );
      })}
    </div>
  );
};
