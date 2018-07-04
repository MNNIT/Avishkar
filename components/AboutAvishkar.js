export default () => (
  <section>
    <div className="text-container">
      <h2>About</h2>
      <p>
        <span>T</span>he end of September will corroborate another confluence in
        the city of Sangam- a conflux of every field of technology and quizzing
        arenas along with inspirational talks from people representing different
        walks of life . This is the concoction level of Avishkar that inspires
        every brain out there to ideate ,innovate and create. Whether it's about
        quenching your thirst of exploring the cyber world or your mania of
        electronics, your idea of building the world or the surge of power that
        leads this world, Another Sophia or Jarvis or maybe your own Mendel's
        experiment ....the idea of flying in the air or a chase in the chemical
        world and who would manage everything while the technicalities are being
        taken care of. With this plethora of events, we have gnosiomania- the
        ultimate quiz battle and gnoTalks-an open panel discussion to people of
        great intellect inspiring young minds and leaving them in awe. So
        unleash your minds and dive into this pool as we have something for each
        one of you. Step up and get ready for this extravaganza!!
      </p>
    </div>
    <style jsx>{`
      section {
        color: #212121;
        padding: 20px;
        background-color: #21d4fd;
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
