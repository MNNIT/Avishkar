export default () => (
  <section>
    <div>
      <h3>Follow us on Socials</h3>
      <div className="container">
        <div className="img-container">
          <a href="https://facebook.com" target="_blank">
            <img src="static/logo/facebook.png" alt="" />
          </a>
        </div>
        <div className="img-container">
          <a href="https://twitter.com" target="_blank">
            <img src="static/logo/twitter.png" alt="" />
          </a>
        </div>
        <div className="img-container">
          <a href="https://instagram.com" target="_blank">
            <img src="static/logo/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        section {
          padding: 10px 0px 30px 0px;
          background-color: #eeeeee;
        }
        section > div {
          width: 100%;
          height: auto;
        }
        h3 {
          text-align: center;
          font-size: 1.5rem;
        }
        .container {
          display: flex;
          justify-content: space-around;
          width: 300px;
          margin: 0 auto;
        }
        .img-container {
          width: 64px;
          height: 64px;
        }
        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      `}
    </style>
  </section>
);
