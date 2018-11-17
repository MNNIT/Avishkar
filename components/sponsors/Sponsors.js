import React, { Component } from "react";
import SponsorsView from "./SponsorsView";
const sponsors = {
  present: [
    // { name: "Eat On", img: "dell.png" },
    { name: "Malt", img: "malt.png" },
    { name: "Lifafa", img: "lifafa.jpg" },
    // { name: "HungerHunt", img: "dell.png" },
    { name: "khunnoo lal", img: "khunnoo.png" },
    // { name: "HotelPlacid", img: "dell.png" },
    // { name: "AIEFA", img: "dell.png" },
    { name: "Made Easy", img: "made-easy.jpg" },
    { name: "Vidyalankar", img: "vidyalankar.png" },
    { name: "Being Zero", img: "being-zero.png" },
    { name: "Paytm", img: "paytm.jpg" },
    // { name: "IES Master", img: "ies-master.png" },
    { name: "Oyo", img: "oyo.png" },
    { name: "Engineer Circle", img: "ec.png" },
    { name: "Top coder", img: "topcoder.png" },
    { name: "Hacker Earth", img: "hackerearth.png" }
  ],

  past: [
    { name: "DELL", img: "dell.jpg" },
    { name: "Pepsi", img: "pepsi.jpg" },
    {
      name: "Coca Cola",
      img: "coca-cola.jpg"
    },
    {
      name: "Dominos Pizza",
      img: "dominos-pizza.jpg"
    },
    {
      name: "Bikanervala",
      img: "bikanervala.jpg"
    },
    {
      name: "Godrej interio",
      img: "godrej-interio.jpg"
    },
    {
      name: "Dhyeya IAS",
      img: "dhyeya-ias.jpg"
    },
    {
      name: "Indian Oil",
      img: "indian-oil.jpg"
    },
    {
      name: "Made Easy",
      img: "made-easy.jpg"
    },
    { name: "IMS", img: "ims.jpg" },
    { name: "KTPL", img: "ktpl.jpg" },
    {
      name: "Gate Forum",
      img: "gate-forum.jpg"
    },
    { name: "KTM", img: "ktm.jpg" },
    {
      name: "Royal Enfield",
      img: "royal-enfield.jpg"
    },
    { name: "Hero", img: "hero.jpg" },
    { name: "TATA", img: "tata.jpg" },
    { name: "Toyota", img: "toyota.jpg" },
    { name: "Hyundai", img: "hyundai.jpg" },
    { name: "Jagran", img: "jagran.svg" },
    { name: "Sonata", img: "sonata.jpg" },
    { name: "SBI", img: "sbi.jpg" },
    {
      name: "Vijaya Bank",
      img: "vijaya-bank.jpg"
    },
    {
      name: "Allahabad Bank",
      img: "allahabad-bank.jpg"
    },
    {
      name: "Hackerearth",
      img: "hackerearth.jpg"
    },
    {
      name: "Hindustantimes",
      img: "hindustan-times.jpg"
    },
    { name: "Autodesk", img: "autodesk.jpg" },
    { name: "Levis", img: "levis.jpg" }
  ]
};
class Sponsors extends Component {
  render() {
    return (
      <div>
        <SponsorsView
          directory="sponsors"
          people={sponsors.present}
          heading="Present Sponsors"
        />
        <SponsorsView
          directory="past-sponsors"
          people={sponsors.past}
          heading="Past Sponsors"
        />
      </div>
    );
  }
}

export default Sponsors;
