import { Link } from "react-router-dom";
import logo from "../../assets/icon/logo.png"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-white md:mt-20 mt-28">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 items-center gap-6 px-3 md:px-0">
                <div className="text-black">
                    <img className="w-20" src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptates quas? Porro molestias earum ab. Placeat doloremque quod perspiciatis fugit.</p>
                    <div className="flex items-center gap-3 mt-5">
                        <FaFacebookF className="bg-black text-white text-4xl hover:bg-blue-900 duration-300 scale-100 hover:scale-105 p-2 rounded-md cursor-pointer" />
                        <FaLinkedinIn className="bg-black text-white text-4xl hover:bg-blue-900 duration-300 scale-100 hover:scale-105 p-2 rounded-md cursor-pointer" />
                        <FaTwitter className="bg-black text-white text-4xl hover:bg-blue-900 duration-300 scale-100 hover:scale-105 p-2 rounded-md cursor-pointer" />
                        <FaInstagram className="bg-black text-white text-4xl hover:bg-blue-900 duration-300 scale-100 hover:scale-105 p-2 rounded-md cursor-pointer" />
                    </div>
                </div>
                <div className="text-black">
                    <h1 className="text-2xl font-bold mb-4">About</h1>
                    <p>Zeux</p>
                    <Link to="/portfolio"><p className="my-2">Portfolio</p></Link>
                    <p>Careers</p>
                    <p className="mt-2">Contact Us</p>
                </div>

                <div className="text-black">
                    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptatem nihil repellat deleniti facilis dicta maxime deserunt dolorum necessitatibus hic.</p>
                    <p className="font-bold mt-5">+880 1966 406795</p>
                </div>
            </div>
            <hr className="w-full my-6 border-1 border-black/50" />
            <p className="text-center text-black mb-9">Copyright@2024 All rights Rcerved</p>
        </div>
    );
};

export default Footer;