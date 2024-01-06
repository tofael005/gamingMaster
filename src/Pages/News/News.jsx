import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


const News = () => {
    return (
        <div className="">
            <div className="flex items-center gap-2">
                        <Link to="/"><h1 className="flex items-center gap-2 cursor-pointer scale-100 hover:scale-95 duration-300">Home <IoIosArrowForward /></h1></Link>
                        <Link to="/about"><p className="text-sm text-red-600 cursor-pointer">About</p></Link>
                    </div>
        </div>
    );
};

export default News;