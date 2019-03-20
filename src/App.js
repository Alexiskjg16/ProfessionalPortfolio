import React, { Component } from 'react';
import './App.css';





class App extends Component {
  
ShowMe = () => {
    var x = document.getElementById("contactInfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
           <h1> Alexis Grisham</h1>
        </header>
        <section className="App-Body">
          <section>
            <h1>Skills</h1>
            <p className="skillset"> HTML, CSS, JavaScript, ReactJS, AngularJS, VueJS, Flexbox, Git, .NET, C#, SQL, VisualStudio, Trello, ChromeCast,
               Crystal Reports, myAvatar by Netsmart Solutions, GitHub, GitLab, Communication, Team-Building, Problem-Solving, Social Media, Networking, Ability to 
               Take Feedback, Desire to Learn, CPR Certified</p>
               <h3 className="ResumeGoogle">View a Hardcopy of my Resume <a href="https://docs.google.com/document/d/1QHyYafwxBO0fHsynWl4Ldh1bKnv_F4vlRQoGpyPEdlA/edit?usp=sharing">Here</a></h3>
               <button onClick={this.ShowMe} className="ContactButton"> Contact Me </button>
          <section id="contactInfo" className="contactinfo">
          <h1>Email: <a href="mailto:alexiskjg16@gmail.com" className="codeName">alexiskjg16@gmail.com</a></h1>
          <h1>Phone: <a href="tel:9413047266" className="codeName">941.304.7266</a></h1>
          <h1>LinkedIn: <a href="https://www.linkedin.com/in/alexis-grisham-434401169/" target="_blank" rel="noopener noreferrer" className="codeName">AlexisGrisham</a></h1>
          </section>  
          </section>
          <section className="projectSection">
            <h1>View the projects:</h1>
                     <section className="codingSection"> 
                     <a href="http://tbdvsupport.surge.sh/" target="_blank" rel="noopener noreferrer" className="codeNameTitle">Capstone - TBDVSupport </a>
                     <p>React JS with C#</p>
                     <a href="https://github.com/Alexiskjg16/THECapstoneProject" target="_blank" rel="noopener noreferrer" className="codeName"> Code: Github</a>
                     </section>
                     <section className="codingSection">
                 <a href="http://faithful-trouble.surge.sh/" target="_blank" rel="noopener noreferrer" className="codeNameTitle">Go Jayhawks! </a>
                     <p>Vue JS</p>
                     <a href="https://github.com/Alexiskjg16/VueScoreboard" target="_blank" rel="noopener noreferrer" className="codeName">Code: Github</a>
                     </section> 
                     <section className="codingSection">
                 <a href="https://snowing-hangman.surge.sh" target="_blank" rel="noopener noreferrer" className="codeNameTitle">Hangman </a>
                     <p>React JS</p>
                     <a href="https://github.com/Alexiskjg16/SnowmanGame" target="_blank" rel="noopener noreferrer" className="codeName">Code: Github</a>
                     </section>
                     <section className="codingSection">
                 <a href="https://weather-app.alexisgrisham.surge.sh" target="_blank" rel="noopener noreferrer" className="codeNameTitle">WeatherAPI </a>
                     <p>Javascript with APIs</p>
                     <a href="https://github.com/Alexiskjg16/weather-app" target="_blank" rel="noopener noreferrer" className="codeName">Code: Github</a>
                     </section>
                     <section className="codingSection">
                 <a href="http://ngtacos.surge.sh/" target="_blank" rel="noopener noreferrer" className="codeNameTitle">Random Taco Recipe Generator </a>
                     <p> Angular JS with APIs</p>
                     <a href="https://github.com/Alexiskjg16/ngtacos" target="_blank" rel="noopener noreferrer" className="codeName">Code: Github</a>
                     </section>
          </section>
        </section>
        <section className="basis">
         <h2 className="socialLink">Social Media: </h2>
          <a href="https://twitter.com/Alexiskjg16" target="_blank" rel="noopener noreferrer" className="socialLink">Twitter</a>
          <a href="https://www.instagram.com/alexiskjg16/?hl=en" target="_blank" rel="noopener noreferrer" className="socialLink">Instagram</a>
          </section>
     <footer>
       <h6 className="Footer"> Property of AKG 2019</h6>
     </footer>
      </div>
    )
  }
}

export default App;
