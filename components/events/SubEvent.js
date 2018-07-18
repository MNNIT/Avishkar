export default ({ subEventData, show, color, hideModal }) => {
  let className = show ? "animate" : "preanimate";
  return (
    <section className={className}>
      {subEventData.map(function(data) {
        return (
          <div className="container">
            <div className="title-container">
              <h3 style={{ color }}>{data.displayName}</h3>
              <span onClick={hideModal}>close</span>
            </div>
            <div>
              <p className="info">{data.info}</p>
            </div>
            <div>
              {/* <h3 style={{ color }}>Rounds</h3> */}
              <p />
            </div>
          </div>
        );
      })}
      <style jsx>{`
        section {
          width: 60%;
          padding: 40px;
          background-color: #eeeeee;
          border-radius: 8px;
          margin: 0 auto;
          position: fixed;
          top: 50%;
          left: 50%;
          transition: transform 0.4s;
          box-sizing: border-box;
        }
        div.title-container {
          padding: 10px 0px;
          position: relative;
        }
        div.title-container h3 {
          margin: 0px;
          position: absolute;
          left: 0px;
          top: 0px;
        }
        div.title-container span {
          position: absolute;
          right: 0px;
          top: 0px;
          cursor: pointer;
          color: red;
          display: none;
        }
        p.info {
          clear: left;
          font-size: 18px;
          text-align: justify;
        }
        .animate {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
          z-index: 10000000;
        }
        .preanimate {
          transform: translate(-50%, -50%) scale(0.9);
          opacity: 0;
          z-index: -1;
        }
        @media (max-width: 700px) {
          section {
            width: 100vw;
            height: 100vh;
            overflow: scroll;
            border-radius: 0px;
          }
          div.title-container span {
            display: block;
          }
          section.animate {
            top: 0px;
            left: 0px;
            transform: scale(1);
          }
          .preanimate {
            transform: scale(0.9);
            opacity: 0;
            z-index: -1;
          }
        }
      `}</style>
    </section>
  );
};
