import { useEffect, useState } from "react";
import SingleGame from "./SingleGame";


const AllGame = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("/allGame.json")
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])
    return (
        <div className="max-w-[1240px] mx-auto md:mt-20 mt-10 px-3 md:px-0">
            <h1>All Game</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    games.map((game, index) => <SingleGame key={index} game={game}/>)
                }
            </div>
        </div>
    );
};

export default AllGame;