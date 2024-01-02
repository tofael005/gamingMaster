import about from "../../assets/game/about.png"
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-3 md:px-0 mt-10">
            <div className="flex flex-col md:flex-row justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="flex items-center gap-2">Home <IoIosArrowForward /></h1>
                        <p className="">About</p>
                    </div>
                </div>
                <div>
                    <img className="w-[600px]" src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;