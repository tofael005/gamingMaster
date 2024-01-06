import rev1 from "../../assets/portfolio/Ellipse 3.png"
import rev2 from "../../assets/portfolio/Ellipse 1.png"
import rev3 from "../../assets/portfolio/Ellipse 2.png"


import { FaStar } from "react-icons/fa6";



const HappyCus = () => {
    return (
        <div className="md:mt-28 mt-16">
            <h1 className="text-3xl font-bold text-center ">Trusted by Thousands of Happy Customer</h1>
            <p className="text-center my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
            <div className="grid md:grid-cols-3 gap-6 md:mt-16">
                <div className="border rounded-md p-6 bg-white text-black">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex gap-5 items-center">
                            <img src={rev1} alt="" />
                            <div>
                                <h1 className="font-semibold">Viezh Robert</h1>
                                <p className="text-sm text-gray-400">Warsaw, Poland</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <h1>4.6</h1>
                            <FaStar className="text-orange-600" />
                        </div>
                    </div>
                    <p className="md:py-4 py-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className="border rounded-md p-6">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex gap-5 items-center">
                            <img src={rev3} alt="" />
                            <div>
                                <h1 className="font-semibold">Viezh Robert</h1>
                                <p className="text-sm text-gray-400">Warsaw, Poland</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <h1>4.6</h1>
                            <FaStar className="text-orange-600" />
                        </div>
                    </div>
                    <p className="md:py-4 py-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className="border rounded-md p-6">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex gap-5 items-center">
                            <img src={rev2} alt="" />
                            <div>
                                <h1 className="font-semibold">Viezh Robert</h1>
                                <p className="text-sm text-gray-400">Warsaw, Poland</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <h1>4.6</h1>
                            <FaStar className="text-orange-600" />
                        </div>
                    </div>
                    <p className="md:py-4 py-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
            </div>
        </div>
    );
};

export default HappyCus;