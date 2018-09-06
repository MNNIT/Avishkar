import Image from "./Image";
export default ({ eventName, handleAlertOpen, contactInfo }) => {
  const img = `/static/backgrounds/${eventName}_edited.jpg`;
  const capitalizedEventName = eventName[0].toUpperCase() + eventName.slice(1);
  return (
    <section>
      <div className="event-title">
        {/* <GoHome /> */}
        <h2>{capitalizedEventName}</h2>
        <button
          onClick={() => {
            handleAlertOpen();
          }}
        >
          Contact Coordinators
        </button>
        <div className="img-container">
          {/* <img src={img} alt={`${eventName} background image`} /> */}
          <Image eventName={eventName} />
        </div>
      </div>
      <style jsx>{`
        section {
          width: 100%;
          background-color: #f5f5f5;
          position: relative;
        }
        .event-title button {
          position: absolute;
          color: whitesmoke;
          text-align: center;
          margin-top: 8%;
          font-weight: 400;
          box-shadow: rgba(108, 174, 221, 0.4) 0px 0px 80px;
          cursor: pointer;
          background: linear-gradient(
            45deg,
            rgb(108, 174, 221),
            rgb(57, 145, 208)
          );
          border-radius: 4px;
          text-decoration: none;
          padding: 0.75em 1.5em;
          border-style: none;
          font-size: 1.175rem;
          font-family: Source Sans Pro, Open Sans, Segoe UI, sans-serif;
        }
        div.event-title {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        div.img-container {
          width: 100%;
          height: auto;
        }
        img {
          width: 100%;
          height: auto;
        }
        h2 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          margin: 0;
        }
        @media (max-width: 700px) {
          .event-title button {
            margin-top: 15%;
            padding: 0.45em 0.5em;
          }
        }
      `}</style>
    </section>
  );
};
