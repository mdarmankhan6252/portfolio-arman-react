import { Helmet } from "react-helmet";
import About from "./About";
import Client from "./Client";
import Experience from "./Experence";
import FaQ from "./FaQ";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Arman</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">
                <Header />
            </div>
            <Services />
            <About />
            <Experience />
            <Portfolio />
            <FaQ />
            <Client />
        </div>
    );
};

export default Home;