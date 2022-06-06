import react from "react";
import "./style.css";



const Navbar = () => {
    return (
        <div className="topnav">
            <div className="icon-section">
                <a href="#home" className="icon">upGrad E-Shop</a>
                <a href="#home">Home</a>
                <a href="#">Add product</a>
            </div>
            <div className="search-container">
                <form>
                    <input type="text" placeholder="Search Products" name="search" />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="button-container">
                <a href="#login">LogIn</a>
                <a href="#signup">SignUp</a>
            </div>
        </div>

    );

} 
export default Navbar;