import React, { Component } from "react";

class SocialFloat extends Component {
  render() {
    return (
      <div>
        <div className="float-container">
          <div className="img-container">
            <a href="https://www.facebook.com/mnnit.avishkar  " target="_blank">
              <img src="static/logo/facebook.png" alt="facebook" />
            </a>
          </div>

          <div className="img-container">
            <a href="https://twitter.com/avishkarMNNIT" target="_blank">
              <img src="static/logo/twitter.png" alt="twitter" />
            </a>
          </div>

          <div className="img-container">
            <a href="https://instagram.com" target="_blank">
              <img src="static/logo/instagram.png" alt="instagram" />
            </a>
          </div>
        </div>
        <style jsx>
          {`
            .float-container {
              height: 170px;
              width: 50px;
              background-color: whitesmoke;
              position: fixed;
              top: 45%;
              right: 0;
              transform: translateY(-50%);
              box-sizing: border-box;
              border-radius: 4px 0 0 4px;
              box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
                0 3px 6px rgba(0, 0, 0, 0.23);
            }
            .img-container a img {
              height: 33px;
              box-sizing: border-box;
              margin: 10px 0px 10px 8px;
            }
            @media (max-width: 600px) {
              .float-container {
                display: none;
                visibility: hidden;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default SocialFloat;
