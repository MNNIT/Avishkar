import React, { Component } from "react";
import Person from "./Person";

export default ({ people, heading }) => {
  return (
    <section>
      <h2>{heading}</h2>
      <div className="container">
        {people.map(function(person) {
          return <Person person={person} />;
        })}
      </div>
      <style jsx>{`
        section {
          padding: 20px 0px;
          background-color: #f5f5f5;
        }
        h2 {
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
        div.card {
          width: 260px;
          height: auto;
          background-color: white;
          z-index: 10;
          transition: transform 0.6s;
          margin: 6px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          border-radius: 4px;
          box-sizing: border-box;

          transition: all 0.5s;
        }

        div.event-element {
          width: 100%;
          height: auto;
          padding: 20px;
          box-sizing: border-box;
        }
        div.img-container {
          width: 100%;
          height: auto;
        }
        img {
          width: 100%;
          height: auto;
        }
        .event-title p {
          text-align: center;
          margin: 0px 0px 10px 0px;
        }
        a {
          text-decoration: none;
          color: black;
        }
        @media (max-width: 700px) {
          div.container {
            width: 100%;
          }
          section {
            background-color: white;
          }
          div.card {
            margin: 10px;
          }
        }
        @media (min-width: 701px) {
          div.card:hover {
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.22);
          }
        }
      `}</style>
    </section>
  );
};
