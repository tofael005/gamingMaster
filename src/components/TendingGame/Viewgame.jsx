import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


const Viewgame = () => {
    return (
        <div className="max-w-[1240px] mx-auto md:mt-10 mt-10 px-2 md:px-0">
            <div className="flex items-center gap-2 mb-6">
                <Link to="/"><h1 className="flex items-center gap-2 cursor-pointer scale-100 hover:scale-95 duration-300">Home <IoIosArrowForward /></h1></Link>
                <Link to="/about"><p className="text-sm text-red-600 cursor-pointer">View Games</p></Link>
            </div>



            <h1 className="text-center md:mt-28 mt-10 md:text-6xl text-2xl font-bold">Coming SOON!</h1>
        </div>
    );
};

export default Viewgame;