export default props => {
  const events = ["webster", "droidrush", "tuxwars", "machine learning"];
  const colors = ["#E91E63", "#673ab7", "#2196F3", "#ff5722", "#009688"];
  return (
    <section>
      <div className="container">
        {props.subEvents.map(function(event, i) {
          const color = colors[i % colors.length];
          return (
            <div
              style={{ backgroundColor: color }}
              key={i}
              onClick={() => {
                props.showEventModal(event, color);
              }}
            >
              {event}
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          section {
            padding: 20px;
            box-sizing: border-box;
            background-color: #fafafa;
            background-image: url("https://www.transparenttextures.com/patterns/arches.png");
          }
          .container {
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
            width: 80%;
            height: auto;
            margin: 0 auto;
            justify-content: center;
            box-sizing: border-box;
          }
          .container div {
            padding: 20px;
            width: 160px;
            height: 160px;
            margin: 20px;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            border-radius: 6px;

            color: white;
            background: teal;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
          }
          .container div:hover {
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.22);
          }
          @media (max-width: 700px) {
            .container {
              width: 100%;
            }
            .container div {
              width: 100px;
              height: 100px;
              margin: 8px;
              font-size: 1rem;
            }
            section {
              padding: 0px;
            }
          }
        `}
      </style>
    </section>
  );
};
