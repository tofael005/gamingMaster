import logo from "../../assets/icon/logo.png"

const Footer = () => {
    return (
        <div className="bg-white mt-20">
            <h1>Footer</h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-6">
                <div className="text-black">
                    <img className="w-20" src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptates quas? Porro molestias earum ab. Placeat doloremque quod perspiciatis fugit.</p>
                    <h1>@Gamging_master</h1>
                </div>
                <div className="text-black">
                    <h1>About</h1>
                    <p>Zeux</p>
                    <p>Portfolio</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                </div>

                <div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Footer;