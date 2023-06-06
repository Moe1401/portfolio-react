
import './App.css';

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
                  <div class="button"><a href="#about-me">full stack Development Student</a></div>
              </div>
              
          </div>    
        </section>

        <section class="sub-section" id="about-me">
          <div class="information">
              <h2>About me</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, accusamus? Odio, totam sint. Esse et commodi repellat harum quo facilis dolor, molestiae, consectetur ut obcaecati cum deserunt quos ullam odio.</p>
          </div>
          <div class="headshot-container">
            <img class="headshot" src="../assets/me.jpg" alt="photo of me"/>
          </div>
        </section>

        <section class="sub-section">
        
          <div class="project-container" id="projets">
            <h2>Projects</h2>
              <div class="project-card1">
                <p class="subtext"><a class="project-link" href="http://www.github.com/Moe1401/">
                  <img class="project image" src="https://fpoimg.com/500x500?text=Hanselman" alt="project 1 image"/>
                </a></p>
                  <h3>Project 1</h3>
                  
                  <p class="subtext">This is my project and info about it: </p>
                  <p class="subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus neque minima earum illo ea, provident itaque fugiat modi vel doloremque magni cum pariatur quaerat perspiciatis quo quisquam culpa veritatis!</p>
                  <hr/>
                  
              </div>
              <div class="project-card">
                <p class="subtext"><a class="project-link" href="http://www.github.com/Moe1401/">
                  <img class="project image" src="https://fpoimg.com/300x300?text=Hanselman" alt="project 2 image"/>
                </a></p>
                  <h3>Project 2</h3>
                  
                  <p class="subtext">info about project</p>
                  <hr/>
                  
              </div>
              <div class="project-card">
                <p class="subtext"><a class="project-link" href="http://www.github.com/Moe1401/">
                  <img class="project image" src="https://fpoimg.com/300x300?text=Hanselman" alt="project 3 image"/>
                  </a></p>
                  <h3>Project 3</h3>
                  
                  <p class="subtext"> info about it</p>
                  <hr/>
                
              </div>
          </div>
        </section>
            
            <footer id="contact">
          <h2>Contact Me</h2>
        
          <p><a href="https://github.com/Moe1401/" class="social">github</a></p>
          <p><a href="https://linkedin.com" class="social">linkedin</a></p>
          <p><a href="https://Moe1401@gmail.com" class="social">Moe1401@gmail.com</a></p>

      </footer>
    </div>
  );
}

export default App;
