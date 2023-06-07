
import './App.css';
import me from './me.jpg';
import weather from './weather page.png';
import note from './note-taker.png';
import gen from './PassGen.png';

function App() {
  return (
    <div className="App">
      
        <section class = "hero" >
          <nav>
            <div>Portfolio</div>
            <ul>
              <li><a href="#about-me">About me</a></li>
              <li><a href="#projets">Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          
            
          </nav>
          <div class="hero-area">            
            <div class="hero-text">
                <h1>Mylan Mouritsen</h1>
                  <div class="headshot-container">
                    <img class="headshot" src={me} alt="photo of me"/>
                  </div>
               <div class="button"><a href="#about-me">full stack Development Student</a></div>
            </div>              
          </div>    
        </section>

        <section class="sub-section" id="about-me">
          <div class="information">
              <h2>About me</h2>
              <p>After nearly 20 years in the shipping industry, moving and delivering packages, it was time for a change. always being interested in 
                technologies like computer programming, it seemed like the right fit. finding out that it would take 4 months to heal from a snowboarding injury
                it seemed like the perfect opportunity to enrol in a 3 month course to learn full stack web Development. the rest.. well..

              </p>
          </div>
          
        </section>

        <section class="sub-section">
        
          <div class="project-container" id="projets">
            <h2>Projects:</h2>
              <div class="project-card1">
                <p class="subtext"><a class="project-link" href="https://github.com/Moe1401/weather-forcast" >
                  <img class="project-image" src={weather} alt="project 1 image"/>
                </a></p>
                  <h3>Weather Forcast</h3>
                  
                  <p class="subtext">weather dashboard with form inputs </p>
                  <p class="subtext">I search for a city, and I'm presented with current and future temperature, humidity, and wind speed for that city.
                    that city is then added to the search history</p>
                    
                  <hr/>
                  
              </div>
              <div class="project-card">
                <p class="subtext"><a class="project-link" href="https://github.com/Moe1401/note-taker">
                  <img class="project-image2" src={note} alt="project 2 image"/>
                </a></p>
                  <h3>note taker</h3>
                  
                  <p class="subtext">write and save notes so that I can organize my thoughts and keep track of tasks I need to complete</p>
              
                  <hr/>
                  
              </div>
              <div class="project-card">
                <p class="subtext"><a class="project-link" href="https://github.com/Moe1401/passwordGen-w3">
                  <img class="project-image2" src={gen} alt="project 3 image"/>
                  </a></p>
                  <h3>password generator </h3>
                  
                  <p class="subtext"> when I click the button to generate a password then I am presented with a series of prompts for password criteria, 
                  least 8 characters and no more than 128 characters, confirm whether or not to include lowercase, uppercase, numeric, and/or special characters.</p>
                  <hr/>
                
              </div>
          </div>
        </section>
            
            <footer id="contact">
          <h2>Contact Me</h2>
        
          <p><a href="https://github.com/Moe1401/" class="social">github</a></p>
          <p><a href="https://www.linkedin.com/in/mylan-mouritsen-248499279/" class="social">linkedin</a></p>
          <p><a href="https://Moe1401@gmail.com" class="social">Moe1401@gmail.com</a></p>

      </footer>
    </div>
  );
}

export default App;
