export default ({ people, heading, directory }) => {
  return (
    <section>
      <h1>{heading}</h1>
      <div className="container">
        {people.map(function(sponsor) {
          return (
            <div key={sponsor.name} className="img-container">
              <img
                src={require(`../../static/img/${directory}/${sponsor.img}`)}
                alt={sponsor.name}
              />
            </div>
          );
        })}
      </div>
      <style jsx>{`
        section {
          padding: 20px 0px;
          background-color: white;
        }
        h1 {
          text-align: center;
          color: #e91e63;
        }
        div.container {
          display: flex;
          width: 80%;
          height: auto;
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: center;
          box-sizing: border-box;
        }
        div.img-container {
          width: 150px;
          height: 150px;
          margin: 30px;
        }
        img {
          width: 100%;
          height: auto;
          vertical-align: baseline;
          margin-top: 75px;
          transform: translateY(-50%);
        }
        @media (max-width: 700px) {
          div.container {
            width: 100%;
          }
          section {
            margin-top: 35px;
            background-color: white;
          }
        }
      `}</style>
    </section>
  );
};
