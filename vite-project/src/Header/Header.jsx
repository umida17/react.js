
import Header from "../Components/Header/Header/Header";

import "./Header.css"
import logo from "../assets/logo (8).png"

function Header() {
    return(
         <>
         <header>
            <div className="container">
               <div className="header-container">
                <img src={logo} alt="" />
                <div className="registir">
                    <a href="#">Home</a> 
                    <a href="#">Destinations</a>        
                    <a href="#">About</a>           
                    <a href="#">Partner</a> 
                    <button className="login">Login</button>
                    <button className="regis">Register</button>
                    

                </div>
                </div> 
            </div>
         </header>
         </> 
    )
}

export default Header;