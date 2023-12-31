import Banner from "../../Log/Banner";
import GmgBanner from "../../components/GmgBnner/GmgBanner";
import Industry from "../../components/Industry/Industry";
import CurrentTending from "../../components/TendingGame/CurrentTending";



const Home = () => {
    return (
        <div>
            <Banner />
            <CurrentTending />
            <Industry />
            <GmgBanner />
        </div>
    );
};

export default Home;