import { Link } from "react-router-dom";
import about from "../../assets/game/about.png"
import about1 from "../../assets/game/about2.png"

import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

const About = () => {
    return (
        <div className=" px-3 md:px-0 md:mt-10 mt-8">

            <div className="flex flex-col md:flex-row justify-between max-w-[1240px] mx-auto">
                <div className="md:w-[650px] md:mt-20">
                    <div className="flex items-center gap-2">
                        <Link to="/"><h1 className="flex items-center gap-2 cursor-pointer scale-100 hover:scale-95 duration-300">Home <IoIosArrowForward /></h1></Link>
                        <Link to="/about"><p className="text-sm text-red-600 cursor-pointer">About</p></Link>
                    </div>

                    <h1 className="text-4xl font-bold md:my-10 my-7">Single player vs. multiplayer vs. massively multiplayer online gaming</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem quos dolorem numquam harum ad delectus blanditiis aliquid aperiam, qui ex voluptatem ipsam nam ullam, fugit libero obcaecati, dignissimos cum.</p>


                    <Link to="/contact">
                        <div className="flex items-center gap-4 md:mt-14 mt-10 w-[180px] cursor-pointer hover:bg-[#221F39] duration-300 rounded-md hover:text-blue-400 font-semibold bg-blue-900 px-7 py-2 md:w-[180px]">
                            <input className="" type="button" value="Get in touch" />
                            <IoMdArrowRoundForward />
                        </div>
                    </Link>
                </div>
                <div className="md:w-[550px] mt-14">
                    <img className="md:w-[900px] rounded-md" src={about} alt="" />
                </div>
            </div>

            {/*------------ WHY YOU WORK WE ------- */}
            <h1 className="md:mt-24 text-3xl font-bold mt-14 max-w-[1240px] mx-auto">Why work with us</h1>
            <div className="md:mt-10 mt-8 grid md:grid-cols-3 gap-6 text-black max-w-[1240px] mx-auto">
                <div className="bg-white md:px-8 md:py-10 px-5 py-10 rounded-md">
                    <h1 className="bg-[#ebc3f6] md:w-36 w-36 p-2 rounded-md font-light">Get Touch One</h1>
                    <div>
                        <h1 className="text-3xl font-semibold md:my-5 my-5">Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, error deleniti dignissimos sunt voluptates neque sit voluptate quod veritatis unde.</p>
                    </div>
                </div>

                {/* TWO  */}
                <div className="bg-white md:px-8 md:py-10 px-5 py-10 rounded-md">
                    <h1 className="bg-[#def6c3] md:w-36 w-36 p-2 rounded-md font-light">Get Touch Two</h1>
                    <div>
                        <h1 className="text-3xl font-semibold md:my-5 my-5">Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, error deleniti dignissimos sunt voluptates neque sit voluptate quod veritatis unde.</p>
                    </div>
                </div>

                {/* THREE  */}
                <div className="bg-white md:px-8 md:py-10 px-5 py-10 rounded-md">
                    <h1 className="bg-[#c2e4f7] md:w-36 w-36 p-2 rounded-md font-light">Get Touch Three</h1>
                    <div>
                        <h1 className="text-3xl font-semibold md:my-5 my-5">Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, error deleniti dignissimos sunt voluptates neque sit voluptate quod veritatis unde.</p>
                    </div>
                </div>
            </div>

            <div className="md:mt-24 bg-white p-8 text-black mt-12">
                <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-8 px-3 md:px-0">
                    <img className="md:w-[550px] rounded-md" src={about1} alt="" />
                    <div className="md:w-[650px]">
                        <p className="md:mt-14">Lorem ipsum</p>
                        <h1 className="md:my-8 text-3xl font-semibold my-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                </div>
            </div>

            {/*------ OUR TEAM -------- */}

            <h1>Our Team</h1>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;