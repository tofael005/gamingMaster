import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

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
                    <h1 className="md:text-3xl font-bold my-6">Lorem Ipsum is simply dummy text of the printing and.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <img className="md:w-full md:h-[70vh] object-cover" src={global} alt="" />
            </div>
        </div>
    );
};

export default Contact;