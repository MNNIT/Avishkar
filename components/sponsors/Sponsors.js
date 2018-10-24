import React, { Component } from "react";
import SponsorsView from "./SponsorsView";
const sponsors = {
  present: [
    // { name: "Eat On", img: "/static/img/sponsors/dell.png" },
    { name: "Malt", img: "/static/img/sponsors/malt.png" },
    { name: "Lifafa", img: "/static/img/sponsors/lifafa.jpg" },
    // { name: "HungerHunt", img: "/static/img/sponsors/dell.png" },
    { name: "khunnoo lal", img: "/static/img/sponsors/khunnoo.png" },
    // { name: "HotelPlacid", img: "/static/img/sponsors/dell.png" },
    // { name: "AIEFA", img: "/static/img/sponsors/dell.png" },
    { name: "Made Easy", img: "/static/img/sponsors/made-easy.jpg" },
    { name: "Vidyalankar", img: "/static/img/sponsors/vidyalankar.png" },
    { name: "Being Zero", img: "/static/img/sponsors/being-zero.png" },
    { name: "Paytm", img: "/static/img/sponsors/paytm.jpg" },
    // { name: "IES Master", img: "/static/img/sponsors/ies-master.png" },
    { name: "Oyo", img: "/static/img/sponsors/oyo.png" },
    { name: "Engineer Circle", img: "/static/img/sponsors/ec.png" },
    { name: "Top coder", img: "/static/img/sponsors/topcoder.png" },
    { name: "Hacker Earth", img: "/static/img/sponsors/hackerearth.png" }
  ],
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
  past: [
    { name: "DELL", img: "/static/img/past-sponsors/dell_edited.jpg" },
    { name: "Pepsi", img: "/static/img/past-sponsors/pepsi_edited.jpg" },
    {
      name: "Coca Cola",
      img: "/static/img/past-sponsors/coca-cola_edited.jpg"
    },
    {
      name: "Dominos Pizza",
      img: "/static/img/past-sponsors/dominos-pizza_edited.jpg"
    },
    {
      name: "Bikanervala",
      img: "/static/img/past-sponsors/bikanervala_edited.jpg"
    },
    {
      name: "Godrej interio",
      img: "/static/img/past-sponsors/godrej-interio_edited.jpg"
    },
    {
      name: "Dhyeya IAS",
      img: "/static/img/past-sponsors/dhyeya-ias_edited.jpg"
    },
    {
      name: "Indian Oil",
      img: "/static/img/past-sponsors/indian-oil_edited.jpg"
    },
    {
      name: "Made Easy",
      img: "/static/img/past-sponsors/made-easy_edited.jpg"
    },
    { name: "IMS", img: "/static/img/past-sponsors/ims_edited.jpg" },
    { name: "KTPL", img: "/static/img/past-sponsors/ktpl_edited.jpg" },
    {
      name: "Gate Forum",
      img: "/static/img/past-sponsors/gate-forum_edited.jpg"
    },
    { name: "KTM", img: "/static/img/past-sponsors/ktm_edited.jpg" },
    {
      name: "Royal Enfield",
      img: "/static/img/past-sponsors/royal-enfield_edited.jpg"
    },
    { name: "Hero", img: "/static/img/past-sponsors/hero_edited.jpg" },
    { name: "TATA", img: "/static/img/past-sponsors/tata_edited.jpg" },
    { name: "Toyota", img: "/static/img/past-sponsors/toyota_edited.jpg" },
    { name: "Hyundai", img: "/static/img/past-sponsors/hyundai_edited.jpg" },
    { name: "Jagran", img: "/static/img/past-sponsors/jagran.svg" },
    { name: "Sonata", img: "/static/img/past-sponsors/sonata_edited.jpg" },
    { name: "SBI", img: "/static/img/past-sponsors/sbi_edited.jpg" },
    {
      name: "Vijaya Bank",
      img: "/static/img/past-sponsors/vijaya-bank_edited.jpg"
    },
    {
      name: "Allahabad Bank",
      img: "/static/img/past-sponsors/allahabad-bank_edited.jpg"
    },
    {
      name: "Hackerearth",
      img: "/static/img/past-sponsors/hackerearth_edited.jpg"
    },
    {
      name: "Hindustantimes",
      img: "/static/img/past-sponsors/hindustan-times_edited.jpg"
    },
    { name: "Autodesk", img: "/static/img/past-sponsors/autodesk_edited.jpg" },
    { name: "Levis", img: "/static/img/past-sponsors/levis_edited.jpg" }
  ]
};
class Sponsors extends Component {
  render() {
    return (
      <div>
        <SponsorsView people={sponsors.present} heading="Present Sponsors" />
        <SponsorsView people={sponsors.past} heading="Past Sponsors" />
      </div>
    );
  }
}

export default Sponsors;
