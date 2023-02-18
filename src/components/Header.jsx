import { Link } from "react-router-dom";


const Header = () => {
    return ( 
        <nav className="header">
            <Link to="/">Home</Link>
            <Link to="/team">Team</Link>
            <Link to="about">About</Link>
        </nav>
     );
}
 
export default Header;