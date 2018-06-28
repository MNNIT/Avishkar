import Meta from "../components/Meta";
import Start from "../components/Start";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Events from "../components/Events";
//import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
const Index = () => {
    return (
        <div>
            <Meta />
            {/*<Navbar />*/}
            <Start/>
            <Banner />
            <Events />
            <Socials />
            <Footer />
        </div>

    )
}
export default Index;