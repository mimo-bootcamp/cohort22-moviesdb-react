import { Outlet, Link } from "react-router-dom";

const Header = () => {
  
    return ( 
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <Outlet />            
        </div>
     );
}
 
export default Header;