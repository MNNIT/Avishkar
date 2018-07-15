import Meta from "../components/Meta";
import Footer from "../components/Footer";
//import Banner from "../components/Banner";
import AboutAvishkar from "../components/AboutAvishkar";
//import Events from "../components/Events";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
//import CanvasBanner from "../components/CanvasBanner";
import IconEvents from "../components/IconEvents";
import ParticlesBanner from "../components/ParticlesBanner";
import { withRouter } from "next/router";
import MobileNav from "../components/MobileNav";
const Index = props => {
  return (
    <div>
      <Meta />
      <Navbar path={props.router.pathname} />
      <MobileNav path={props.router.pathname} />
      {/* <CanvasBanner /> */}
      <ParticlesBanner />
      {/* <Banner /> */}
      <AboutAvishkar />
      {/* <Events /> */}
      <IconEvents />
      <Socials />
      <Footer />
    </div>
  );
};
// You can experiment with the commented components
export default withRouter(Index);
