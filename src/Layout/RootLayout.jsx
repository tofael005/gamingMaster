import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";


const RootLayout = () => {
    return (
        <div className="bg-gradient-to-t from-indigo-600 to-neutral-900 text-white">
            <NavBar />
            <div className="md:min-h-[calc(100vh-100px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;