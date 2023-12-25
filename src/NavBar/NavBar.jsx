import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="mx-3 border-b-2">
            <div className="flex justify-between items-center py-4">
                <div>
                    <h1>LOGO</h1>
                </div>
                <ul className="flex items-center gap-7">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/about"><li>Portfolio</li></Link>
                   
                </ul>
            </div>
        </div>
    );
};

export default NavBar;