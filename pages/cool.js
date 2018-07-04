import Content from "../components/Content";
import pageData from "../data/event_page_data";
import Nav from "../components/NavEvent";
import React, { Component } from "react";

//import dynamic from 'next/dynamic';

class Page extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.url.pathname);
    let { title, event } = this.props.url.query;
    event = event.toLowerCase();

    // const pageData = dynamic(import(`../data/${title}`));
    console.log(pageData);

    if (!pageData[title]) {
      return <h2> ERROR 404 </h2>;
    } else if (pageData[title] && !event) {
      const isValidEvent = pageData[title].eventNames.includes(event);
      if (!isValidEvent) {
        return "show event HomePage here // TODO";
      }
    }
    const data = pageData[title];

    return (
      <div>
        {/* <Meta /> */}
        <Nav data={data} event={event} branch={title} />
        <Content data={data} event={event} />
        {/* <button className="menu-button"><span>Menu</span></button>  */}
      </div>
    );
  }
}
export default Page;
