import Banner from "../../Log/Banner";
import GmgBanner from "../../components/GmgBnner/GmgBanner";
import Industry from "../../components/Industry/Industry";
import OurRecent from "../../components/OurRecentP/OurRecent";
import StayInLoop from "../../components/StayInTheLoop/StayInLoop";
import CurrentTending from "../../components/TendingGame/CurrentTending";



const Home = () => {
    return (
        <div>
            <Banner />
            <CurrentTending />
            <Industry />
            <GmgBanner />
            <OurRecent />
            <StayInLoop />
        </div>
    );
};

export default Home;