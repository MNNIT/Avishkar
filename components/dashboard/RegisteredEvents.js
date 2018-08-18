export default ({ registeredEvents }) => {
  if (registeredEvents.length === 0) {
    return "Not registered for any event";
  }
  return (
    <div>
      {registeredEvents.map(function(event) {
        return <p>{event}</p>;
      })}
    </div>
  );
};
