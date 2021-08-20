import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Handy Blog</h1>
            <div className="links">
                <Link to="/"><b>Home</b></Link>
                <Link to="/create"><b>New Blog</b></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;