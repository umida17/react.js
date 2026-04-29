
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
                    
                </div>
                </div> 
            </div>
         </header>
         </> 
    )
}