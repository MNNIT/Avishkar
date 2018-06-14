import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Events from "../components/Events";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
const Index = () => {
    return (
        <div>
            <Meta />
            {/*<Navbar />*/}
            <Banner />
            <Events />
            <Socials />
            <Footer />
        </div>

    )
}
export default Index;