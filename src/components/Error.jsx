import { Link } from "react-router-dom";
import error from "../assets/error.png"

const Error = () => {
    return (
        <div>
            <div className="md:mt-12 mt-24 px-2 max-w-[1240px] mx-auto">
                <img className="relative w-[500px] mx-auto" src={error} alt="" />
                <Link to="/">
                    <h1 className="absolute md:left-[614px] left-[150px] top-[480px] md:top-[81%] bg-[#F7A582] hover:text-blue-500 duration-300 text-white md:px-14 text-center">Back to Home</h1>
                </Link>
            </div>
        </div>
    );
};

export default Error;