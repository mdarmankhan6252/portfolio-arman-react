import { Helmet } from "react-helmet";
import Header from "./Header";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Arman</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">
                <Header/>
            </div>
        </div>
    );
};

export default Home;