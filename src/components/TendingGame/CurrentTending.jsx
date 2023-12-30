import game1 from "../../assets/game/game1.png"

const CurrentTending = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-3 md:px-0 mt-12">
            <div className="flex justify-between items-center my-5">
                <h1 className="text-2xl">Currently Trending Games</h1>
                <input className="bg-blue-900 duration-300 px-4 py-2 rounded-md cursor-pointer hover:bg-[#221F39]" type="button" value="SEE ALL" />
            </div>
            <div className="mt-10">
                <div>
                    <img src={game1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CurrentTending;