import fbLogo from "../static/logo/facebook.png";
import twitterLogo from "../static/logo/twitter.png";
export default () => (
  <section>
    <div>
      <h3>Follow us on Socials</h3>
      <div className="container">
        <div className="img-container">
          <a href="https://www.facebook.com/mnnit.avishkar" target="_blank">
            <img src={fbLogo} alt="facebook logo" />
          </a>
        </div>
        <div className="img-container">
          <a href="https://twitter.com/avishkarMNNIT" target="_blank">
            <img src={twitterLogo} alt="twitter logo" />
          </a>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        section {
          padding: 10px 0px 30px 0px;
          background-color: black;
        }

        a {
          color: white;
          font-size: 34px;
        }
        section > div {
          width: 100%;
          height: auto;
        }
        h3 {
          text-align: center;
          font-size: 1.5rem;
          color: #e91e63;
          /*color: white;*/
        }
        .container {
          display: flex;
          justify-content: space-around;
          width: 200px;
          margin: 0 auto;
          padding: 20px;
        }
        .img-container {
          width: 40px;
          height: 40px;
        }
        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        @media (max-width: 700px) {
          .img-container {
            width: 40px;
            height: 40px;
          }
          .container {
            width: 240px;
          }
        }
      `}
    </style>
  </section>
);
