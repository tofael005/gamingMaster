import { Link } from "react-router-dom";
import about from "../../assets/game/about.png"
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

const About = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-3 md:px-0 md:mt-10 mt-8">

            <div className="flex flex-col md:flex-row justify-between">
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
                    <img className="md:w-[900px]" src={about} alt="" />
                </div>
            </div>

            {/*------------ WHY YOU WORK WE ------- */}
            <h1 className="md:mt-24 text-3xl font-bold mt-10">Why work with us</h1>
            <div className="md:mt-10 mt-5 grid md:grid-cols-3 gap-6">
                <div className="">
                    <h1>Get Touch One</h1>
                    <div>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, error deleniti dignissimos sunt voluptates neque sit voluptate quod veritatis unde.</p>
                    </div>
                </div>
            </div>

            

        </div>
    );
};

export default About;