import game1 from "../../assets/game/game1.png"
import game2 from "../../assets/game/game2.png"
import game3 from "../../assets/game/game3.png"
import game4 from "../../assets/game/game4.png"



import { GiDistraction } from "react-icons/gi";

const CurrentTending = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-3 md:px-0 mt-12">
            <div className="flex justify-between items-center my-5">
                <h1 className="md:text-2xl">Currently Trending Games</h1>
                <input className="bg-blue-900 duration-300 md:px-4 md:py-2 px-2 py-1 rounded-md cursor-pointer hover:bg-[#221F39]" type="button" value="SEE ALL" />
            </div>


            <div className="mt-10 grid md:grid-cols-4 gap-4">
                <div className="text-center">
                    <img className="block mx-auto scale-100 hover:scale-105 duration-300 cursor-pointer" src={game1} alt="" />
                    <div className="flex itmes-center gap-2 text-xl md:ml-16 ml-24 mt-3">
                        <GiDistraction /> 
                        <p>1234 Followers</p>
                    </div> 
                </div>
                <div className="text-center">
                    <img className="block mx-auto scale-100 hover:scale-105 duration-300 cursor-pointer" src={game2} alt="" />
                    <div className="flex itmes-center gap-2 text-xl md:ml-16 ml-24 mt-3">
                        <GiDistraction /> 
                        <p>2345 Followers</p>
                    </div> 
                </div>
                <div className="text-center">
                    <img className="block mx-auto scale-100 hover:scale-105 duration-300 cursor-pointer" src={game3} alt="" />
                    <div className="flex itmes-center gap-2 text-xl md:ml-16 ml-24 mt-3">
                        <GiDistraction /> 
                        <p>5678 Followers</p>
                    </div> 
                </div>
                <div className="text-center">
                    <img className="block mx-auto scale-100 hover:scale-105 duration-300 cursor-pointer" src={game4} alt="" />
                    <div className="flex itmes-center gap-2 text-xl md:ml-[70px] ml-24 mt-3">
                        <GiDistraction /> 
                        <p>1001 Followers</p>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default CurrentTending;