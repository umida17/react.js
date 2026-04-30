
import "./App.css"
import logo from "../src/assets/logo (8).png"
import travel from "../src/assets/travel.png"
import travel2 from "../src/assets/travel2.png"
import image from "../src/assets/image 4 (2).png"
import tog from "../src/assets/tog'.png"
import daryo from "../src/assets/daryo.png"
import piknik from "../src/assets/piknik.png"
import Thousand from "../src/assets/Thousand-03.png"
import group from "../src/assets/Group (10).png"
import foto from "../src/assets/foto.png"
 
 
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
                    <button className="login">Login</button>
                    <button className="regis">Register</button>
                  </div>
               
                </div>
            </div>
        </header>

        <main>
            <section className="section1">
                <div className="container">
                    <div className="section1-container">
                        <div className="travel">
                            <h2 className="amd">Explore and Travel</h2>
                            <div class="holiday-finder">
                            <h2>Holiday finder</h2>
                            <div class="line"></div>

                   <div class="finder-grid">
                     <div class="select-wrapper">
                                    <select name="location">
                                        <option value="" disabled selected>Location</option>
                                        <option value="uzbekistan">Uzbekistan</option>
                                        <option value="europe">Europe</option>
                                    </select>
                                </div>

                           <div class="select-wrapper">
                            <select name="activity">
                                        <option value="" disabled selected>Activity</option>
                                        <option value="hiking">Hiking</option>
                                        <option value="swimming">Swimming</option>
                                    </select>
                                </div>

                           <div class="select-wrapper">
                                <select name="grade">
                                        <option value="" disabled selected>Grade</option>
                                        <option value="easy">Easy</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>

                            <div class="select-wrapper">
                                <select name="date">
                                        <option value="" disabled selected>Date</option>
                                        <option value="2024-05">May 2024</option>
                                        <option value="2024-06">June 2024</option>
                                    </select>
                                </div>
                            </div>

                            <button class="explore-btn">Explore</button>
                        </div>
                        </div>

                        <img className="trav" src={travel} alt="" />
                    </div>
                    <div class="decor-circle circle-1"></div>
                <div class="decor-circle circle-2"></div>
                <div class="decor-circle circle-3"></div>
                <div class="decor-plus plus-1">+</div>
                </div>
            </section>

            <section className="section2">
                <div className="container">
                    <div className="section2-container">
                          <img className="havowari" src={travel2} alt="" />    
                          <div className="world">
                            <div className="about-section">
                        <div class="decor-element top-orange-plus">+</div>
                          <div class="decor-element bottom-right-circle"></div></div>
                            <h3 className="way">A new way to explore the world </h3>
                            <p className="for">For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect 
                            trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                            <button className="more">Learn more</button>
                            
                            </div>  
                      
                    </div>
                   
                 </div>
            </section>

           <section className="destinations">
        <div className="container">
             <div className="destinations-section3">
    <h2 className="reat">Featured destinations</h2>
    <a href="#" className="view-all">View all </a>
  </div>

  <div className="destinations-grid">
    <div className="card">
         <img className="card-image" src={image} alt="" />
      <div className="card-info">
        <h3>Raja Ampat</h3>
        <p>Indonesia</p>
      </div>
    </div>


    <div className="card">
         <img className="card-image" src={tog} alt="" />
      <div className="card-info">
        <h3>Fanjingshan</h3>
        <p>China</p>
      </div>
    </div>


    <div className="card">
         <img className="card-image" src={daryo} alt="" />
      <div className="card-info">
        <h3>Vevey</h3>
        <p>Switzerland</p>
      </div>
    </div>


    <div className="card">
         <img className="card-image" src={piknik} alt="" />
      <div className="card-info">
        <h3>Skadar</h3>
        <p>Montenegro</p>
      </div>
    </div>

    

    </div>
        </div>
           </section>


           <section className="section4">
            <div className="container">
                <div className="section4-container">
                    <div className="sunny">
                        <h3>Guides by Thousand Sunny</h3>
                        <p>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>
                        <button>Download</button>
                    </div>
                    <img className="thous" src={Thousand} alt="" />
                </div>
            </div>
           </section>



            <section className="section5">
                <div className="container">
                     <h3 className="test">Testimonials</h3>
                    <div className="section5-container">
                    <div className="section5-left">
                          <div className="yulduzcha">
                         <img src={group} alt="" />
                         <img src={group} alt="" />
                         <img src={group} alt="" />
                         <img src={group} alt="" />
                         <img src={group} alt="" />
                     </div>
                        <p className="lacus">“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                        <h4>Edward Newgate</h4>
                        <p>Founder Circle</p>
                    </div>

                    <img src={foto} alt="" />
                    </div>
                </div>
            </section>


            <section className="trending">
                <div className="trending__container">
                  <div className="trending__top">
            <h2 className="trending__title">Trending stories</h2>
            <a href="#" className="trending__view-all">View all</a>
        </div>

        <div className="trending__grid">
           <div className="card">
                 <img src="rasm2.jpg" alt="Story" className="card__image">
                <h3 className="card__title">The best Kyoto restaurant to try Japanese food</h3>
                <p className="card__desc">From tofu to teahouses, here's our guide to Kyoto’s best restaurants to visit...</p>
                <a href="#" className="card__link">Read more</a>
            </div>

            <div className="card">
                 <img src="rasm2.jpg" alt="Story" className="card__image">
                <h3 className="card__title">The best Kyoto restaurant to try Japanese food</h3>
                <p className="card__desc">From tofu to teahouses, here's our guide to Kyoto’s best restaurants to visit...</p>
                <a href="#" className="card__link">Read more</a>
            </div>
            <div className="card">
                 <img src="rasm2.jpg" alt="Story" className="card__image">
                <h3 className="card__title">The best Kyoto restaurant to try Japanese food</h3>
                <p className="card__desc">From tofu to teahouses, here's our guide to Kyoto’s best restaurants to visit...</p>
                <a href="#" className="card__link">Read more</a>
            </div>
           <div className="card">
                 <img src="rasm2.jpg" alt="Story" className="card__image">
                <h3 className="card__title">The best Kyoto restaurant to try Japanese food</h3>
                <p className="card__desc">From tofu to teahouses, here's our guide to Kyoto’s best restaurants to visit...</p>
                <a href="#" className="card__link">Read more</a>
            </div>
        </div>
    </div>
</section>

        </main>

         </>
    )
}
export default App