export default () => (
  <section>
    <div className="text-container">
      <p>
        Avishar 2k18 is finally here! In order to fly, all you need is a vision.
        AeroClub MNNIT helps to provide this vision, it's own wings of fire.
        Here you not only learn different aspects of aerodynamics,but also
        inbuilt the leadership skills, the art of time management and much more.
        Aerodynamics event conducted under the aegis of AeroClub, MNNIT, are
        listed below.
        <br />
        <br />
        Come, participate and win exciting prizes!
        <br />
        <b>All branches Allowed.</b>
      </p>
      <h2>PUSHPAK VIMAN</h2>
      <p>
        In this event,in the nut shell, one must design a glider (an RC Plane).
        This event consists of 4 rounds, each round even more exciting and
        thrilling than the previous one. The last round is flying the glider. No
        round is elimination round but scores of all the rounds will be counted.
      </p>
      <h3 style={{ display: "inline" }}>Problem Statement:</h3>
      &nbsp;&nbsp;{" "}
      <a
        href="../../static/pdf/Pusphak_Vimaan_Problem_Statement.pdf"
        style={{ height: "24px", display: "inline" }}
        target="_blank"
      >
        <img
          src="../../static/svg/attachment.svg"
          style={{ height: "24px", verticalAlign: "middle" }}
        />
      </a>
      <h2>AERIAL VEHICLE DESIGN</h2>
      <p>
        This event is basically aerial robotics. Here, one must design a drone
        which can perform various tasks. This event consists of two rounds.
        Round 1 involving maneuvering skills and round 2 to check the
        communication, detection and functioning of different sensors while
        flying.
      </p>
      <h3 style={{ display: "inline" }}>Problem Statement:</h3>
      &nbsp;&nbsp;{" "}
      <a
        href="../../static/pdf/Aerial_Vehicle_Design.pdf"
        style={{ height: "24px", display: "inline" }}
        target="_blank"
      >
        <img
          src="../../static/svg/attachment.svg"
          style={{ height: "24px", verticalAlign: "middle" }}
        />
      </a>
      {/* <ol>
        <p>
          <li>
            Aerial Vehicle Design &nbsp;
            <a
              href="../../static/pdf/Aerial_Vehicle_Design.pdf"
              style={{ height: "18px" }}
              target="_blank"
            >
              <img
                src="../../static/icon/paperclip.svg"
                style={{ height: "18px" }}
              />
            </a>
          </li>
        </p>
        <p>
          <li>
            Pushpak Vimaan &nbsp;
            <a
              href="../../static/pdf/Pusphak_Vimaan_Problem_Statement.pdf"
              style={{ height: "18px" }}
              target="_blank"
            >
              <img
                src="../../static/icon/paperclip.svg"
                style={{ height: "18px" }}
              />
            </a>
          </li>
        </p>
      </ol> */}
    </div>
    <style jsx>{`
      section {
        color: #212121;
        padding: 40px;
      }
      div.text-container {
        width: 100%;
        /*margin: 0 auto;*/
        margin: 0px;
        padding: 50px;
        border-radius: 10px;
        background-color: #f5f5f5;
        box-sizing: border-box;
      }
      h2 {
        color: #e91e63;
      }
      p {
        font-size: 20px;
        text-align: justify;
      }
      p span {
        font-size: 28px;
      }
      @media (max-width: 700px) {
        p {
          font-size: 16px;
        }
        p span {
          font-size: 20px;
        }
        section {
          padding: 0px;
        }
        div.text-container {
          border-radius: 0px;
          padding: 30px;
        }
      }
    `}</style>
  </section>
);
