

const SingleGame = ({ game }) => {
    const { img, title, rating, follower } = game;
    return (
        <div className="max-w-[1240px] mx-auto mt-10 px-3 md:px-0">
            <div>
                <img className="md:w-full relative md:h-full w-full h-full rounded-md" src={img} alt="" />
                <h1>{title}</h1>
                <div>
                    <h1>Rating:</h1>
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleGame;