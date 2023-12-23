import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
// import Footer from "../Pages/Footer/Footer";


const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

export default RootLayout;