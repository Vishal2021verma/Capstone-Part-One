import react from "react";
import "./style.css";
import { Outlet, Link } from "react-router-dom";



const Navbar = () => {
    return (
        <>
        <div className="topnav">
            <ul className="icon-section">
                <li className="icon"><Link to="/">upGrad E-Shop</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/Addproduct">Add Products</Link></li>
                
               
            </ul>
            <div className="search-container">
                <form>
                    <input type="text" placeholder="Search Products" name="search" />
                    <button type="submit">Search</button>
                </form>
            </div>
            <ul className="button-container">
                <li><Link to="/login">LogIn</Link></li>
                <li><Link to="/signup">SignUp   </Link></li>
            </ul>
        </div>
        <Outlet />

        </>


    );

} 
export default Navbar;