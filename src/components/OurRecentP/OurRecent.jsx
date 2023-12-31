import pro1 from "../../assets/project/project1.png"
import pro2 from "../../assets/project/project2.png"
import pro3 from "../../assets/project/project3.png"
import pro4 from "../../assets/project/project4.png"
import pro6 from "../../assets/project/project6.png"

const OurRecent = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-3 md:px-0 mt-16'>
            <div className="text-center">
                <h1 className="text-3xl font-bold my-5">Our Recent Projects</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
                <img className="w-full md:h-full h-[200px] scale-100 hover:scale-95 duration-300 cursor-pointer" src={pro1} alt="" />
                <img className="w-full md:h-full h-[200px] scale-100 hover:scale-95 duration-300 cursor-pointer" src={pro2} alt="" />
                <img className="w-full md:h-full h-[200px] scale-100 hover:scale-95 duration-300 cursor-pointer" src={pro3} alt="" />
                <img className="w-full md:h-full h-[200px] scale-100 hover:scale-95 duration-300 cursor-pointer" src={pro4} alt="" />
                <img className="w-full md:h-full h-[200px] scale-100 hover:scale-95 duration-300 cursor-pointer" src={pro3} alt="" />
                <img className="w-full md:h-full h-[200px] scale-100 hover:scale-95 duration-300 cursor-pointer" src={pro6} alt="" />
            </div>
            <input className="bg-[#221F39] block mx-auto mt-6 duration-300 md:px-4 md:py-2 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-900" type="button" value="SEE ALL" />
        </div>
    );
};

export default OurRecent;