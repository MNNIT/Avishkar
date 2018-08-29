import Meta from "../components/Meta";
import Footer from "../components/Footer";
import AboutAvishkar from "../components/AboutAvishkar";
import Navbar from "../components/Navbar";
//import MobileNav from "../components/MobileNav";
import Socials from "../components/Socials";
import SocialFloat from "../components/SocialFloat";
import IconEvents from "../components/IconEvents";
import ParticlesBanner from "../components/ParticlesBanner";
import { withRouter } from "next/router";

const Index = props => {
  return (
    <>
      <Meta />
      <ParticlesBanner />
      <SocialFloat />
      <AboutAvishkar />
      <Socials />
      <Footer />
    </>
  );
};
export default withRouter(Index);
