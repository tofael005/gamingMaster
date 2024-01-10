


const StayInLoop = () => {
    return (
        <div className="max-w-[1240px] mx-auto md:mt-20 mt-10 px-3">
            <h1 className="text-3xl font-bold text-center ">Stay In The Loop</h1>
            <p className="text-center md:w-[750px] mx-auto my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corporis quas tenetur praesentium quaerat at ut eaque consequatur eos eius qui, eveniet veritatis earum optio vel vitae cum doloremque a.</p>
            <div className="bg-white rounded-md flex flex-col md:flex-row gap-6 items-center  py-10 justify-between px-10">
                <div className="text-black ">
                    <h1 className="text-3xl font-bold mb-4">Stay in the loop</h1>
                    <p>Subscribe to receive the latest news and updates about TDA. <br /> We promise not to spam you! </p>
                </div>
                <div className=" ">
                    <input className="w-[300px] md:w-[300px] p-3 rounded-md bg-black relative" type="email" name="email" id="" placeholder="Enter email address" />
                    <div>
                        <input className="bg-red-600 text-white p-3 rounded-md absolute right-[40px] md:right-[150px] cursor-pointer hover:bg-[#221F39] duration-300" type="button" value="Submit" />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default StayInLoop;