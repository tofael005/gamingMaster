import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;