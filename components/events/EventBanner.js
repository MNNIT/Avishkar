import Image from "./Image";
//import GoHome from "./GoHome";
export default ({ eventName }) => {
  const img = `/static/backgrounds/${eventName}_edited.jpg`;
  return (
    <section>
      <div className="event-title">
        {/* <GoHome /> */}
        <h2>{eventName}</h2>
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
      `}</style>
    </section>
  );
};
