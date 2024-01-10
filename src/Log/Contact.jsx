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
                            <FaFacebook className="text-3xl" />
                            <FaInstagram className="text-3xl" />
                            <FaTwitter className="text-3xl" />
                            <FaLinkedinIn className="text-3xl" />
                        </div>
                    </div>
                </div>
                <div className="md:w-[400px]">
                    <div className="flex gap-4 items-center">
                        <FiPhoneCall className="text-3xl" />
                        <h1>+880 1966 406795</h1>
                    </div>
                </div>
                <div className="md:w-[400px]">
                    <div className="flex gap-4 items-center">
                        <ImLocation className="text-4xl" />
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi .</h1>
                    </div>
                </div>
            </div>


            {/* CONTACT FORM  */}
            <div className="md:mt-28 mt-10 md:w-[700px] mx-auto bg-black p-5 rounded-md">
                <form>
                    <span className="flex flex-col md:flex-row gap-5 justify-between mb-4">
                        <div>
                            <label htmlFor="">First name</label><br />
                            <input className="md:w-[310px] w-full p-2 rounded-md mt-1" type="text" name="name" id="" placeholder="First name" />
                        </div>
                        <div>
                            <label htmlFor="">Last name</label><br />
                            <input className="md:w-[330px] w-full p-2 rounded-md mt-1" type="text" name="name" placeholder="Last name" />
                        </div>
                    </span>
                    <label htmlFor="">Email</label> <br />
                    <input className="mt-1 p-2 rounded-md w-full mb-4" type="email" name="email" id="" placeholder="Enter email" />

                    <label htmlFor="">Massege</label><br />
                    <textarea className="mt-1 w-full rounded-md" name="text" id="" cols="10" rows="10"></textarea>

                    <button className="text-center hover:bg-[#2c284a] duration-300 md:text-md rounded-md hover:text-blue-400 mx-auto mt-6 w-full p-2 bg-blue-800">Continue</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;