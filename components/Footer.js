export default () => (
  <section>
    <footer>
      <div className="footer">
        <div>
          <p>
            <a href="https://goo.gl/maps/JQb18a3Go4G2" target="_blank">
              MNNIT, Allahabad, India - 211004
            </a>
          </p>
          <p>
            Email :{" "}
            <a href="mailto:avishkar@mnnit.ac.in">avishkar@mnnit.ac.in</a>
          </p>
          <p>copyright &copy; Avishkar 2018. All rights reserved. </p>
        </div>
      </div>
    </footer>
    <style jsx>
      {`
        section {
          background-color: black;
          font-size: 14px;
        }
        footer {
          width: 80%;
          padding: 50px;
          height: auto;
          color: white;
          box-sizing: border-box;
          margin: 0 auto;
        }
        div.footer {
          width: 100%;
          display: flex;
        }
        h2 {
          text-align: center;
        }

        a {
          text-decoration: none;
          color: white;
        }
        div.footer > div {
          width: 100%;
          text-align: center;
        }
        footer > p {
          text-align: center;
        }
        @media (max-width: 700px) {
          footer {
            padding: 30px 15px;
          }
        }
      `}
    </style>
  </section>
);
