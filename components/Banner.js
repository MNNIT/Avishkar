export default () => (
  <section>
    <div className="intro">
      <h1>Avishkar 2018</h1>
      <h2>The annual techfest of MNNIT Allahabad</h2>
    </div>
    <style jsx>
      {`
        .intro {
          max-width: 100%;
          height: 300px;
          background-color: #21d4fd;
          background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
          padding: 20px 100px;
          color: white;
          box-sizing: border-box;
          text-align: center;
        }
        .intro > * {
          font-weight: 400;
        }
        .intro h1 {
          font-size: 42px;
        }
      `}
    </style>
  </section>
);
