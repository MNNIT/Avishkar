import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import AboutAvishkar from "../components/AboutAvishkar";
import Events from "../components/Events";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import CanvasBanner from "../components/CanvasBanner";
import IconEvents from "../components/IconEvents";
const Index = () => {
  return (
    <div>
      <Meta />
      {/*<Navbar />*/}
      {/* <CanvasBanner /> */}
      <Banner />
      <AboutAvishkar />
      {/* <Events /> */}
      <IconEvents />
      <Socials />
      <Footer />
    </div>
  );
};
export default Index;
