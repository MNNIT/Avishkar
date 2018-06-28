export default props => {
  let styles = {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    background: "#212121",
    zIndex: 100,
    opacity: 0.6
  };
  styles.display = props.show ? "block" : "none";
  return <div style={styles} onClick={props.hideModal} />;
};
