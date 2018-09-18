import React, { Component } from "react";
import SponsorsView from "./SponsorsView";
const pastsponsors = {
  first: [
    { name: "DELL", img: "/static/img/past-sponsors/dell.png" },
    { name: "Pepsi", img: "/static/img/past-sponsors/pepsi.png" },
    { name: "Coca Cola", img: "/static/img/past-sponsors/coca-cola.jpg" },
    {
      name: "Dominos Pizza",
      img: "/static/img/past-sponsors/dominos-pizza.png"
    },
    { name: "Bikanervala", img: "/static/img/past-sponsors/bikanervala.png" },
    {
      name: "Godrej interio",
      img: "/static/img/past-sponsors/godrej-interio.png"
    }
  ],
  second: [
    { name: "Dhyeya IAS", img: "/static/img/past-sponsors/dhyeya-ias.png" },
    { name: "Indian Oil", img: "/static/img/past-sponsors/indian-oil.png" },
    { name: "Made Easy", img: "/static/img/past-sponsors/made-easy.png" },
    { name: "IMS", img: "/static/img/past-sponsors/ims.png" },
    { name: "KTPL", img: "/static/img/past-sponsors/ktpl.png" },
    { name: "Gate Forum", img: "/static/img/past-sponsors/gate-forum.jpg" }
  ],
  third: [
    { name: "KTM", img: "/static/img/past-sponsors/ktm.jpg" },
    {
      name: "Royal Enfield",
      img: "/static/img/past-sponsors/royal-enfield.jpg"
    },
    { name: "Hero", img: "/static/img/past-sponsors/hero.png" },
    { name: "TATA", img: "/static/img/past-sponsors/tata.png" },
    { name: "Toyota", img: "/static/img/past-sponsors/toyota.png" },
    { name: "Hyundai", img: "/static/img/past-sponsors/hyundai.png" }
  ],
  fourth: [
    { name: "Jagran", img: "/static/img/past-sponsors/jagran.svg" },
    { name: "Sonata", img: "/static/img/past-sponsors/sonata.jpg" },
    { name: "SBI", img: "/static/img/past-sponsors/sbi.jpg" },
    { name: "Vijaya Bank", img: "/static/img/past-sponsors/vijaya-bank.png" },
    {
      name: "Allahabad Bank",
      img: "/static/img/past-sponsors/allahabad-bank.png"
    }
  ],
  fifth: [
    { name: "Hackerearth", img: "/static/img/past-sponsors/hackerearth.png" },
    {
      name: "Hindustantimes",
      img: "/static/img/past-sponsors/hindustan-times.png"
    },
    { name: "Autodesk", img: "/static/img/past-sponsors/autodesk.jpg" },
    { name: "Levis", img: "/static/img/past-sponsors/levis.png" }
  ],
  all: [
    { name: "DELL", img: "/static/img/past-sponsors/dell.png" },
    { name: "Pepsi", img: "/static/img/past-sponsors/pepsi.png" },
    { name: "Coca Cola", img: "/static/img/past-sponsors/coca-cola.jpg" },
    {
      name: "Dominos Pizza",
      img: "/static/img/past-sponsors/dominos-pizza.png"
    },
    { name: "Bikanervala", img: "/static/img/past-sponsors/bikanervala.png" },
    {
      name: "Godrej interio",
      img: "/static/img/past-sponsors/godrej-interio.png"
    },
    { name: "Dhyeya IAS", img: "/static/img/past-sponsors/dhyeya-ias.png" },
    { name: "Indian Oil", img: "/static/img/past-sponsors/indian-oil.png" },
    { name: "Made Easy", img: "/static/img/past-sponsors/made-easy.png" },
    { name: "IMS", img: "/static/img/past-sponsors/ims.png" },
    { name: "KTPL", img: "/static/img/past-sponsors/ktpl.png" },
    { name: "Gate Forum", img: "/static/img/past-sponsors/gate-forum.jpg" },
    { name: "KTM", img: "/static/img/past-sponsors/ktm.jpg" },
    {
      name: "Royal Enfield",
      img: "/static/img/past-sponsors/royal-enfield.jpg"
    },
    { name: "Hero", img: "/static/img/past-sponsors/hero.png" },
    { name: "TATA", img: "/static/img/past-sponsors/tata.png" },
    { name: "Toyota", img: "/static/img/past-sponsors/toyota.png" },
    { name: "Hyundai", img: "/static/img/past-sponsors/hyundai.png" },
    { name: "Jagran", img: "/static/img/past-sponsors/jagran.svg" },
    { name: "Sonata", img: "/static/img/past-sponsors/sonata.jpg" },
    { name: "SBI", img: "/static/img/past-sponsors/sbi.jpg" },
    { name: "Vijaya Bank", img: "/static/img/past-sponsors/vijaya-bank.png" },
    {
      name: "Allahabad Bank",
      img: "/static/img/past-sponsors/allahabad-bank.png"
    },
    { name: "Hackerearth", img: "/static/img/past-sponsors/hackerearth.png" },
    {
      name: "Hindustantimes",
      img: "/static/img/past-sponsors/hindustan-times.png"
    },
    { name: "Autodesk", img: "/static/img/past-sponsors/autodesk.jpg" },
    { name: "Levis", img: "/static/img/past-sponsors/levis.png" }
  ]
};
class PastSponsors extends Component {
  render() {
    return (
      <div>
        <SponsorsView people={pastsponsors.all} heading="Past Sponsors" />
      </div>
    );
  }
}

export default PastSponsors;
