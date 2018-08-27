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
      <p>
        This site is still in development and is not meant for actual users!
      </p>
      <Footer />
      <style jsx>{`
        p {
          color: white;
          background-color: #f44336;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          text-align: center;
          margin: 0;
        }
      `}</style>
    </div>
  );
};
export default withRouter(Index);
