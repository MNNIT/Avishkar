export default ({ show, hideModal }) => {
  let display = show ? "block" : "none";
  return (
    <div onClick={hideModal} style={{ display }}>
      <style jsx>
        {`
          div {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;
            background-color: #212121;
            z-index: 10;
            opacity: 0.6;
          }
        `}
      </style>
    </div>
  );
};
