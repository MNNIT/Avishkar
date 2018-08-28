import Loader from "react-loader-spinner";

export default (function() {
  return (
    <div className="loader-container">
      <Loader type="ThreeDots" color="black" height="50" width="60" />
      <style jsx>
        {`
          .loader-container {
            display: inline-block;
            margin-left: 50%;
            transform: translate(-50%, 0);
          }
        `}
      </style>
    </div>
  );
});
