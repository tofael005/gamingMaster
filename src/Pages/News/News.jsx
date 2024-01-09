import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import right1 from "../../assets/news/right1.png"
import right2 from "../../assets/news/right2.png"

import left1 from "../../assets/news/left1.png"
import left2 from "../../assets/news/left2.png"
import left3 from "../../assets/news/left3.png"
import left4 from "../../assets/news/left4.png"
import left5 from "../../assets/news/left5.png"
import left6 from "../../assets/news/left6.png"
import left7 from "../../assets/news/left7.png"



const News = () => {
    return (
        <div className="max-w-[1240px] mx-auto md:mt-16 mt-10 md:px-0 px-3">
            <div className="flex items-center gap-2">
                <Link to="/"><h1 className="flex items-center gap-2 cursor-pointer scale-100 hover:scale-95 duration-300">Home <IoIosArrowForward /></h1></Link>
                <Link to="/about"><p className="text-sm text-red-600 cursor-pointer">News</p></Link>
            </div>


            <div className="text-center md:mt-8 mt-6">
                <h1 className="text-3xl font-bold mb-4">Lorem Ipsum is simply dummy text of the printing and.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                <div className="md:mt-10 mt-10">
                    <input className="w-[300px] md:w-[300px] p-3 rounded-md bg-white relative" type="search" name="search" id="" placeholder="Search" />
                    <input className="bg-red-600 text-white p-3 rounded-r-md absolute right-[40px] md:right-[560px] cursor-pointer hover:bg-[#363156] duration-300" type="button" value="Search" />
                </div>
            </div>


            {/*---------CONTENT SECTION ---------*/}

            <div className="flex gap-10 justify-between md:mt-20 mt-10 flex-col md:flex-row">
                {/*------LEFT SIDE--------*/}
                <div className="md:w-[620px]">
                    <div>
                        <img src={right1} alt="" />
                        <div className="flex gap-4 items-center md:mt-5 mt-7 mb-5 ml-[110px] md:ml-0">
                            <button className="bg-pink-400 p-2 rounded-md hover:bg-[#363156] duration-300">John Morc</button>
                            <p>.5min</p>
                        </div>
                        <h1 className="text-2xl font-bold">Lorem Ipsum is simply dummy text dummy text ?</h1>

                        <p className="md:mt-8 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident, obcaecati maiores eius, impedit quisquam fugit ad molestias, quidem doloribus reiciendis nihil iusto quia voluptatibus! Omnis alias laboriosam nobis, asperiores inventore consequatur aspernatur ut repudiandae amet ullam sunt voluptates.</p>
                    </div>
                    <hr className="md:my-16 my-10" />
                    <div>
                        <img src={right2} alt="" />
                        <div className="flex gap-4 items-center md:mt-5 mt-7 mb-5 ml-[110px] md:ml-0">
                            <button className="bg-blue-400 p-2 rounded-md hover:bg-[#363156] duration-300">John Morc</button>
                            <p>.5min</p>
                        </div>
                        <h1 className="text-2xl font-bold">Lorem Ipsum is simply dummy text dummy text ?</h1>

                        <p className="md:mt-8 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident, obcaecati maiores eius, impedit quisquam fugit ad molestias, quidem doloribus reiciendis nihil iusto quia voluptatibus! Omnis alias laboriosam nobis, asperiores inventore consequatur aspernatur ut repudiandae amet ullam sunt voluptates.</p>
                    </div>
                    
                </div>

                {/*------RIGHT SIDE--------*/}
                <div className="md:w-[620px]">
                    <div className="flex gap-8 items-center flex-col md:flex-row">
                        <img className="md:w-[190px] md:h-[190px] w-full" src={left1} alt="" />
                        <div className="md:text-left text-center">
                            <div className="flex gap-4 items-center mb-5 ml-[110px] md:ml-0">
                                <button className="bg-pink-400 p-2 rounded-md hover:bg-[#363156] duration-300">John Morc</button>
                                <p>.5min</p>
                            </div>
                            <h1 className="md:text-2xl text-xl">Lorem Ipsum is simply dummy text dummy text ? </h1>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center flex-col md:flex-row md:mt-16 mt-8">
                        <img className="md:w-[190px] md:h-[190px] w-full" src={left2} alt="" />
                        <div className="md:text-left text-center">
                            <div className="flex gap-4 items-center mb-5 ml-[110px] md:ml-0">
                                <button className="bg-blue-400 p-2 rounded-md hover:bg-[#363156] duration-300">John Morc</button>
                                <p>.5min</p>
                            </div>
                            <h1 className="md:text-2xl text-xl">Lorem Ipsum is simply dummy text dummy text ? </h1>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center flex-col md:flex-row md:mt-16 mt-8">
                        <img className="md:w-[190px] md:h-[190px] w-full" src={left3} alt="" />
                        <div className="md:text-left text-center">
                            <div className="flex gap-4 items-center mb-5 ml-[110px] md:ml-0">
                                <button className="bg-red-400 p-2 rounded-md hover:bg-[#363156] duration-300">John Morc</button>
                                <p>.5min</p>
                            </div>
                            <h1 className="md:text-2xl text-xl">Lorem Ipsum is simply dummy text dummy text ? </h1>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center flex-col md:flex-row md:mt-16 mt-8">
                        <img className="md:w-[190px] md:h-[190px] w-full" src={left4} alt="" />
                        <div className="md:text-left text-center">
                            <div className="flex gap-4 items-center mb-5 ml-[110px] md:ml-0">
                                <button className="bg-green-400 p-2 rounded-md hover:bg-[#363156] duration-300">John Morc</button>
                                <p>.5min</p>
                            </div>
                            <h1 className="md:text-2xl text-xl">Lorem Ipsum is simply dummy text dummy text ? </h1>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center flex-col md:flex-row md:mt-16 mt-8">
                        <img className="md:w-[190px] md:h-[190px] w-full" src={left5} alt="" />
                        <div className="md:text-left text-center">
                            <div className="flex gap-4 items-center mb-5 ml-[110px] md:ml-0">
                                <button className="bg-orange-400 p-2 rounded-md hover:bg-[#363156] duration-300">John Morc</button>
                                <p>.5min</p>
                            </div>
                            <h1 className="md:text-2xl text-xl">Lorem Ipsum is simply dummy text dummy text. </h1>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center flex-col md:flex-row md:mt-16 mt-8">
                        <img className="md:w-[190px] md:h-[190px] w-full" src={left6} alt="" />
                        <div className="md:text-left text-center">
                            <div className="flex gap-4 items-center mb-5 ml-[110px] md:ml-0">
                                <button className="bg-purple-400 p-2 rounded-md hover:bg-[#363156] duration-300">John Morc</button>
                                <p>.5min</p>
                            </div>
                            <h1 className="md:text-2xl text-xl">Lorem Ipsum is simply dummy text dummy text. </h1>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center flex-col md:flex-row md:mt-16 mt-8">
                        <img className="md:w-[190px] md:h-[190px] w-full" src={left7} alt="" />
                        <div className="md:text-left text-center">
                            <div className="flex gap-4 items-center mb-5 ml-[110px] md:ml-0">
                                <button className="bg-orange-400 p-2 rounded-md hover:bg-[#363156] duration-300">John Morc</button>
                                <p>.5min</p>
                            </div>
                            <h1 className="md:text-2xl text-xl">Lorem Ipsum is simply dummy text dummy text. </h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default News;