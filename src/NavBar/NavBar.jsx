import { Link } from "react-router-dom";
import logo from "../assets/icon/logo.png"
import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
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
                        toggle ? <IoMdClose  onClick={() => setToggle(!toggle)}/> : <GiHamburgerMenu onClick={() => setToggle(!toggle)}/>
                    }
                </span>

                <ul className={`flex md:w-[800px] items-center duration-300 flex-col py-4 md:p-0 text-white md:text-gray-900 bg-opacity-100 top-20 bg-black md:bg-transparent w-full text-center md:flex-row gap-4 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
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