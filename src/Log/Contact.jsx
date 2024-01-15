import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation } from "react-icons/im";

import global from "../assets/contact/Huge Global.png"
import Swal from "sweetalert2";

import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";


const Contact = () => {
    const form = useRef();
    const [from_name, setFrom_name] = useState(" ");
    const [from_email, setFrom_email] = useState(" ");
    const [message, setMessage] = useState(" ");
    const [from_number, setFrom_number] = useState(" ");
    const navigate = useNavigate()


    const sendEmail = (e) => {
        e.preventDefault();
        setFrom_name(" ");
        setFrom_email(" ");
        setMessage(" ");
        setFrom_number(" ");
        emailjs.sendForm('service_9uojqas', 'template_gqw9x2s', form.current, 'j_ecYPOBb7wFf4Jf7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                navigate("/home")
            });
    };

    function alert() {
        Swal.fire({
            title: "DONE",
            text: "Submit success!",
            icon: "success"
        });
    }
    return (
        <div className="max-w-[1240px] mx-auto md:mt-16 mt-10 px-3 md:px-0">
            <div className="flex items-center gap-2">
                <Link to="/"><h1 className="flex items-center gap-2 cursor-pointer scale-100 hover:scale-95 duration-300">Home <IoIosArrowForward /></h1></Link>
                <Link to="/about"><p className="text-sm text-red-600 cursor-pointer">Contact</p></Link>
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
            <div className="md:mt-28 mt-10 md:w-[700px] mx-auto bg-black/30 text-black p-8 rounded-md">
                <form ref={form} onSubmit={sendEmail}>
                    <label className="text-white">Name</label><br />
                    <input className="w-full p-2 rounded-md mt-1 mb-4" type="text" name="from_name" id="" value={from_name} onChange={(e) => setFrom_name(e.target.value)} placeholder="Enter name" />

                    <label className="text-white">Email</label> <br />
                    <input className="mt-1 p-2 rounded-md w-full mb-4" type="email" name="from_email" id="" value={from_email} onChange={(e) => setFrom_email(e.target.value)} placeholder="Enter email" />

                    <label className="text-white">Number</label> <br />
                    <input className="mt-1 p-2 rounded-md w-full mb-4" type="number" name="from_number" id="" value={from_number} onChange={(e) => setFrom_number(e.target.value)} placeholder="Enter number" />
                   

                    <label className="text-white">Massege</label><br />
                    <textarea className="mt-1 w-full text-black p-2 rounded-md" name="message" id="" cols="10" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter message"></textarea>

                    <input  onClick={alert} className="text-center text-white cursor-pointer hover:bg-[#2c284a] duration-300 md:text-md rounded-md hover:text-blue-400 mx-auto mt-6 w-full p-2 bg-blue-800" type="submit" value="Send" />
                </form>
            </div>

        </div>
    );
};

export default Contact;