import { useEffect, useState } from "react";
import SingleGame from "./SingleGame";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


const AllGame = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("/allGame.json")
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])
    return (
        <div className="max-w-[1240px] mx-auto md:mt-10 mt-10 px-3 md:px-0">
            <div className="flex items-center gap-2 mb-6">
                <Link to="/"><h1 className="flex items-center gap-2 cursor-pointer scale-100 hover:scale-95 duration-300">Home <IoIosArrowForward /></h1></Link>
                <Link to="/about"><p className="text-sm text-red-600 cursor-pointer">All Games</p></Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    games.map((game, index) => <SingleGame key={index} game={game}/>)
                }
            </div>
        </div>
    );
};

export default AllGame;