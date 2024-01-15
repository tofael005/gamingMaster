
import { Link } from "react-router-dom";

const SingleGame = ({ game }) => {
    const { img, title, rating, follower, price } = game;
    return (
        <div className="max-w-[1240px] mx-auto px-3 md:px-0">
            <div className=" rounded-md border-b-2 border-slate-400 shadow-sm shadow-black/25">
                <img className="md:w-full relative md:h-[250px] w-full h-full rounded-t-md scale-100 hover:scale-95 duration-300" src={img} alt="" />
                <h1 className="md:my-4 text-center text-2xl text-gray-300 font-bold">{title}</h1>
                <div className="px-3">
                    <div className="flex items-center justify-between">
                        <h1 className="text-gray-300">Rating:</h1>
                        <p className="font-bold">{rating}</p>
                    </div>
                    <div className="flex items-center my-1 justify-between">
                        <p className="text-gray-300">Followers:</p>
                        <p className="font-bold">{follower}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-300">PRICE: </p>
                        <p className="font-bold">${price}</p>
                    </div>
                    <div className="flex justify-between mt-5 items-center mb-4">
                        <Link to="/viewCart">
                            <button className="hover:bg-[#39345e] duration-300 w-[100px] hover:text-blue-400 font-semibold bg-blue-900 p-2 rounded">VIEW</button>
                        </Link>
                        <Link to="/addCart">
                            <button className="hover:bg-[#5b5395] duration-300 w-[120px] hover:text-blue-400 font-semibold bg-orange-500 rounded p-2">Add to Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGame;