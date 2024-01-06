import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { FaSlidersH } from "react-icons/fa";

import { FaQuoteRight } from "react-icons/fa6";

import vdeo from "../../assets/portfolio/Hero Video.png"


const Portfolio = () => {
    return (
        <div className="max-w-[1240px] mx-auto md:mt-20 px-3">
            <div className="flex items-center gap-2">
                <Link to="/"><h1 className="flex items-center gap-2 cursor-pointer scale-100 hover:scale-95 duration-300">Home <IoIosArrowForward /></h1></Link>
                <Link to="/about"><p className="text-sm text-red-600 cursor-pointer">Portfolio</p></Link>
            </div>
            <h1 className="text-3xl font-semibold my-5">Lorem Ipsum is simply dummy text of the printing and.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>


            <div className="bg-[#1C140F] grid md:grid-cols-3 md:px-10 md:py-10 mt-10 py-10 md:mt-16 rounded-md">
                <div className="flex items-center gap-6 mx-auto p-6">
                    <CgProfile className="text-4xl bg-white text-red-500 p-2 rounded-full" />
                    <div>
                        <h1 className="text-2xl font-bold">90+</h1>
                        <p>Clients</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 mx-auto p-6">
                    <FaLocationDot className="text-4xl bg-white text-red-500 p-2 rounded-full" />
                    <div>
                        <h1 className="text-2xl font-bold">30+</h1>
                        <p>Countries</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 mx-auto p-6">
                    <FaSlidersH className="text-4xl bg-white text-red-500 p-2 rounded-full" />
                    <div>
                        <h1 className="text-2xl font-bold">50+</h1>
                        <p>Projects</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-20">
                <img src={vdeo} alt="" />
                <div>
                    <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing</h1>
                    <p className="my-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quasi illo asperiores aperiam ab a quidem esse officia accusamus! Vitae quia hic nostrum consectetur ullam magni temporibus necessitatibus dolore suscipit!</p>
                    <div>
                        <div className="flex gap-4 items-center">
                            <FaQuoteRight className="bg-green-600 rounded-full p-1 text-2xl"/>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaQuoteRight className="bg-green-600 rounded-full p-1 text-2xl my-3"/>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaQuoteRight className="bg-green-600 rounded-full p-1 text-2xl mb-3"/>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaQuoteRight className="bg-green-600 rounded-full p-1 text-2xl"/>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;