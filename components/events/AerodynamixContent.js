export default () => (
  <section>
    <div className="text-container">
      <p>
        The competition requires the participants to design a RC (Remote
        -Controlled) plane (no Readymade Planes are allowed) and perform a set
        of maneuvers. The event will be conducted at the ground of MNNIT and
        participants will need to bring their aircraft and all necessary
        equipment to this venue. The arena will be an open ground. There will be
        two rounds of the competition.
      </p>
      <h2>Events</h2>
      <ol>
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
      </ol>
      <h2>Rounds</h2>
      <div>
        <h3>A. Qualifier Round</h3>
        <p>
          {" "}
          The best measure of the design of an aircraft can be done by climb and
          gliding time. To examine this, participants have to climb for 30
          seconds. After this, they need to perform a dead stick flight
          (throttle=0 or Gliding). The plane however can be maneuvered while its
          gliding. The teams will be graded based on a) Smooth Climb (35%) b)
          Glide Time (65%)
        </p>

        <h3>B. Maneuver Round</h3>
        <p>
          {" "}
          A horizontal eight loop around the 2 vertical poles 25 points per loop
          (none for incomplete loop)
        </p>
      </div>
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
