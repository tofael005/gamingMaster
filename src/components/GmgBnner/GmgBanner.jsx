import gmg from "../../assets/icon/banner.jpg"

import icon1 from "../../assets/icon/Group 48.png"
import icon2 from "../../assets/icon/Group 49.png"
import icon3 from "../../assets/icon/Group 50.png"
import icon4 from "../../assets/icon/Group 51.png"
import icon5 from "../../assets/icon/Group 52.png"
import icon6 from "../../assets/icon/Group 53.png"

import { FaLocationArrow } from "react-icons/fa";

const GmgBanner = () => {
    return (
        <div className="mt-10">
            <img className="relative md:h-[830px] md:w-full object-cover " src={gmg} alt="" />

            <div className="absolute left-0 md:top-[2004px] top-[2198px] w-full h-[223px] md:w-full md:h-[830px] bg-black/60 backdrop-brightness-100">
                <h1 className="text-center md:mt-28 md:text-4xl mt-5 font-bold">Live the Adventure, Master the Action</h1>
                <p className="md:w-[800px] mx-auto md:my-6 px-3 md:px-0 text-transparent md:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores iusto ipsam debitis excepturi nihil corporis repellendus quo consequatur eaque eos adipisci esse molestias, ab quod blanditiis optio impedit cupiditate!</p>
                <div className="md:w-[900px] px-2 md:px-0 md:mt-20 mx-auto grid grid-cols-2 -mt-28 md:grid-cols-2 gap-6 ">
                    <div className="">
                        <img className="block mx-auto w-8 md:w-20" src={icon1} alt="" />
                        <h1 className="md:my-5 text-center text-sm">Mobile Game Development</h1>
                        <FaLocationArrow className="block mx-auto cursor-pointer" />
                    </div>
                    <div>
                        <img className="block mx-auto w-8 md:w-20" src={icon2} alt="" />
                        <h1 className="md:my-5 text-center text-sm">Mobile Game Development</h1>
                        <FaLocationArrow className="block mx-auto cursor-pointer" />
                    </div>
                    <div className="md:mt-10">
                        <img className="block mx-auto w-8 md:w-20" src={icon3} alt="" />
                        <h1 className="md:my-5 text-center text-sm">Mobile Game Development</h1>
                        <FaLocationArrow className="block mx-auto cursor-pointer" />
                    </div>
                    <div className="md:mt-10">
                        <img className="block mx-auto w-8 md:w-20" src={icon3} alt="" />
                        <h1 className="md:my-5 text-center text-sm">Mobile Game Development</h1>
                        <FaLocationArrow className="block mx-auto cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GmgBanner;