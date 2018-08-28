import Meta from "../components/Meta";
import Footer from "../components/Footer";
import AboutAvishkar from "../components/AboutAvishkar";
import Navbar from "../components/Navbar";
//import MobileNav from "../components/MobileNav";
import Socials from "../components/Socials";
import IconEvents from "../components/IconEvents";
import ParticlesBanner from "../components/ParticlesBanner";
import { withRouter } from "next/router";

const Index = props => {
  return (
    <div>
      <Meta />
      <Navbar path={props.router.pathname} />
      <ParticlesBanner />
      <AboutAvishkar />
      <Socials />
      <Footer />
    </div>
  );
};
export default withRouter(Index);
