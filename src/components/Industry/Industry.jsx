import banner from "../../assets/banner/banne2.png"

const Industry = () => {
    return (
        <div className='max-w-[1240px] mx-auto mt-12 mb-20'>
            <h1 className='text-center md:text-4xl font-bold text-lg px-2 leading-loose'>Single player vs. multiplayer vs. massively <br /> multiplayer online gaming</h1>

            <div className='grid md:grid-cols-2 gap-6 md:mt-24 mt-6 px-3 md:px-0'>
                <p><span className='md:text-2xl font-bold'>Lorem ipsum dolor sit</span> amet consectetur adipisicing elit. Distinctio magni aperiam provident harum officiis laborum, laudantium a excepturi eos ipsam aliquam eius, cumque quaerat quisquam porro beatae maxime doloribus </p>
            </div>
            <img className="md:w-full object-cover px-3 md:px-0 mt-5" src={banner} alt="" />
        </div>
    );
};

export default Industry;