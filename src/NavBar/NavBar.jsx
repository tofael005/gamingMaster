import { Link } from "react-router-dom";
import 

const NavBar = () => {
    return (
        <div className="mx-3 border-b-2">
            <div className="flex justify-between items-center py-4">
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul className="flex items-center gap-7">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/portfolio"><li>Portfolio</li></Link>
                    <Link to="/news"><li>News</li></Link>
                    <Link to="/contact"><input className="cursor-pointer bg-red-400 px-7 py-2 rounded" type="button" value="Contact" /></Link>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;