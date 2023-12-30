import { Link } from "react-router-dom";
import logo from "../assets/icon/logo.png"
import { useState } from "react";

import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [toggle, setToggle] = useState()
    return (
        <div className="px-3">
            <div className="flex justify-between items-center py-4">
                <div>
                    <Link to="/"><img className="w-[70px]" src={logo} alt="" /></Link>
                </div>

                <span>
                    {

                    }
                </span>

                <ul className="flex items-center gap-7">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/portfolio"><li>Portfolio</li></Link>
                    <Link to="/news"><li>News</li></Link>
                    <Link to="/contact"><input className="cursor-pointer hover:bg-blue-500 duration-300 hover:text-red-400 font-semibold bg-red-400 px-7 py-2 rounded" type="button" value="Contact" /></Link>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;