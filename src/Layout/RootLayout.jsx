import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";


const RootLayout = () => {
    return (
        <div className="bg-gradient-to-tr from-blue-500 to-indigo-900">
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;