import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation } from "react-icons/im";

import global from "../assets/contact/Huge Global.png"


const Contact = () => {
    return (
        <div className="max-w-[1240px] mx-auto md:mt-16 mt-10 px-3 md:px-0">
            <div className="flex items-center gap-2">
                <Link to="/"><h1 className="flex items-center gap-2 cursor-pointer scale-100 hover:scale-95 duration-300">Home <IoIosArrowForward /></h1></Link>
                <Link to="/about"><p className="text-sm text-red-600 cursor-pointer">Portfolio</p></Link>
            </div>
            <div className="md:mt-10 mt-14">
                <div className="md:mb-10 mb-10 text-center">
                    <h1 className="md:text-3xl font-bold my-4">Lorem Ipsum is simply dummy text of the printing and.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <img className="md:w-full md:h-[70vh] object-cover" src={global} alt="" />
            </div>


            {/* FOLLOW US  */}
            <div className="grid md:grid-cols-3 gap-6 items-center md:mt-16 mt-10">
                <div className="md:w-[400px]">
                    <div>
                        <h1 className="font-bold">Follow us</h1>
                        <div className="flex gap-4 items-center md:mt-5">
                            <FaFacebook className="text-3xl"/>
                            <FaInstagram className="text-3xl"/>
                            <FaTwitter className="text-3xl"/>
                            <FaLinkedinIn className="text-3xl"/>
                        </div>
                    </div>
                </div>
                <div className="md:w-[400px]">
                    <div className="flex gap-4 items-center">
                        <FiPhoneCall className="text-3xl"/>
                        <h1>+880 1966 406795</h1>
                    </div>
                </div>
                <div className="md:w-[400px]">
                    <div className="flex gap-4 items-center">
                        <ImLocation className="text-3xl"/>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi .</h1>
                    </div>
                </div>
            </div>


            {/* CONTACT FORM  */}
            <div className="md:mt-16 mt-10">
                <h1>Contact form</h1>
            </div>

        </div>
    );
};

export default Contact;