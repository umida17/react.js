
import "./App.css"
import logo from "../src/assets/logo (8).png"
function App(){
    return (
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
                     
                  </div>
                  <button>Login</button>
                  <button>Register</button>
                </div>
            </div>
        </header>

         </>
    )
}
export default App