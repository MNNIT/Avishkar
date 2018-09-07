import Link from "next/link";

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
            <br />
            {(function() {
              if (data.displayName === "Infinity Crusade") {
                return (
                  <div>
                    <h3 style={{ color, display: "inline" }}>
                      Problem Statement
                    </h3>
                    &nbsp;&nbsp;{" "}
                    <a
                      href="../../static/pdf/Infinity Crusade.pdf"
                      style={{ height: "24px", display: "inline" }}
                      target="_blank"
                    >
                      <img
                        src="../../static/svg/attachment.svg"
                        style={{ height: "24px", verticalAlign: "middle" }}
                      />
                    </a>
                  </div>
                );
              } else if (data.displayName === "Fractal Hunt") {
                return (
                  <div>
                    <h3 style={{ color, display: "inline" }}>
                      Problem Statement
                    </h3>
                    &nbsp;&nbsp;{" "}
                    <a
                      href="../../static/pdf/Fractal Hunt.pdf"
                      style={{ height: "24px", display: "inline" }}
                      target="_blank"
                    >
                      <img
                        src="../../static/svg/attachment.svg"
                        style={{ height: "24px", verticalAlign: "middle" }}
                      />
                    </a>
                  </div>
                );
              } else if (
                data.displayName === "The Terrain Trek of Gliese 667C b"
              ) {
                return (
                  <div>
                    <h3 style={{ color, display: "inline" }}>
                      Problem Statement
                    </h3>
                    &nbsp;&nbsp;{" "}
                    <a
                      href="../../static/pdf/Gliese 667 CB.pdf"
                      style={{ height: "24px", display: "inline" }}
                      target="_blank"
                    >
                      <img
                        src="../../static/svg/attachment.svg"
                        style={{ height: "24px", verticalAlign: "middle" }}
                      />
                    </a>
                  </div>
                );
              } else if (data.problemStatements) {
                if (data.problemStatements.length === 1) {
                  return (
                    <div>
                      <h3 style={{ color, display: "inline" }}>
                        Problem Statement
                      </h3>
                      &nbsp;&nbsp;{" "}
                      <a
                        href={data.problemStatements[0]}
                        style={{ height: "28px", display: "inline" }}
                        target="_blank"
                      >
                        <img
                          src="../../static/svg/attachment.svg"
                          style={{
                            height: "24px",
                            width: "24px",
                            verticalAlign: "middle"
                          }}
                        />
                      </a>
                    </div>
                  );
                } else if (data.problemStatements.length === 2) {
                  return (
                    <>
                      <div>
                        <h3 style={{ color, display: "inline" }}>
                          Problem Statement for 1st Years
                        </h3>
                        &nbsp;&nbsp;{" "}
                        <a
                          href={data.problemStatements[0]}
                          style={{
                            height: "28px",
                            display: "inline",
                            textDecoration: "none"
                          }}
                          target="_blank"
                        >
                          <img
                            src="../../static/svg/attachment.svg"
                            style={{
                              height: "24px",
                              width: "24px",
                              verticalAlign: "middle"
                            }}
                          />
                        </a>
                      </div>
                      <div>
                        <h3 style={{ color, display: "inline" }}>
                          Problem Statement for 2nd Years
                        </h3>
                        &nbsp;&nbsp;{" "}
                        <a
                          href={data.problemStatements[1]}
                          style={{
                            height: "28px",
                            display: "inline",
                            textDecoration: "none"
                          }}
                          target="_blank"
                        >
                          <img
                            src="../../static/svg/attachment.svg"
                            style={{
                              height: "24px",
                              width: "24px",
                              verticalAlign: "middle"
                            }}
                          />
                        </a>
                      </div>
                    </>
                  );
                }
              }
            })()}
            <br />
            <div className="register-btn">
              {/* <h3 style={{ color }}>Rounds</h3> */}
              <Link
                as={`/dashboard/register/${data.displayName}`}
                href={`/dashboard?tab=register&event=${data.displayName}`}
              >
                <button>Register for Event</button>
              </Link>
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
          max-height: 100vh;
          overflow-y: auto;
        }
        div.register-btn {
          display: inline-block;
          margin-left: 49%;
          transform: translateX(-50%);
        }
        div.register-btn button {
          color: whitesmoke;
          text-align: center;
          margin: 0px;
          font-weight: 400;
          box-shadow: rgba(108, 174, 221, 0.4) 0px 0px 10px;
          cursor: pointer;
          background: linear-gradient(
            45deg,
            rgb(108, 174, 221),
            rgb(57, 145, 208)
          );

          /*background: linear-gradient(
                45deg,
                rgb(173, 120, 220),
                rgb(142, 68, 207)
              );*/
          border-radius: 4px;
          text-decoration: none;
          padding: 0.75em 1.5em;
          border-style: none;
          font-size: 1.075rem;
          font-family: Source Sans Pro, Open Sans, Segoe UI, sans-serif;
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
