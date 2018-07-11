import Link from "next/link";

const data = [["/", "Home"], ["/events", "Events"], ["/team", "Team"]];
export default ({ path }) => (
  <section>
    <nav>
      <div className="navbar">
        <div className="wrapper">
          {data.map(function(item) {
            const className =
              item[0] === path ? "link-container active" : "link-container";
            return (
              <div className={className}>
                <Link href={item[0]}>
                  <a href={item[0]}>{item[1]}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
    <style jsx>
      {`
        .navbar {
          width: 100vw;
          height: 56px;
          padding: 4px 80px;
          box-sizing: border-box;
          /*background-color: #21d4fd;*/
        }
        div.wrapper {
          display: flex;
          width: 400px;
          height: 100%;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          box-sizing: border-box;
        }
        div.link-container {
          height: 80%;
          width: 90px;
          padding: 10px 20px;
          margin: 10px;
          background-color: #eeeeee;
          border-radius: 6px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          text-align: center;
        }
        div.active {
          border: 2px solid #21d4fd;
        }
        div.active a {
          color: #21d4fd;
        }
        a {
          margin: 0px;
          text-decoration: none;
          color: #424242;
          width: 100%;
        }
        @media (max-width: 700px) {
          section {
            display: none;
          }
          .navbar {
            padding: 0px;
          }
        }
      `}
    </style>
  </section>
);
