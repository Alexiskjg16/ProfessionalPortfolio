import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <h1> Alexis Grisham</h1>
        </header>
        <body>
          <section>
            <h1>Skills</h1>
            <p> HTML, CSS, JavaScript, ReactJS, AngularJS, VueJS, Flexbox, Git, .NET, C#, SQL, VisualStudio, Trello, ChromeCast,
               Crystal Reports, GitHub, GitLab, Communication, Team-Building, Problem-Solving, Social Media, Networking, Ability to 
               Take Feedback, Desire to Learn, CPR Certified</p>
          </section>
          <section>
            <h1>View the projects</h1>
          <section> <a href="http://tbdvsupport.surge.sh/" target="_blank" rel="noopener noreferrer">Capstone - TBDVSupport </a>
                     <h2>React JS with C#</h2>
                     <a href="https://github.com/Alexiskjg16/THECapstoneProject" target="_blank" rel="noopener noreferrer" className="CodeList">View in Github</a>
                     </section>
                     <section>
                 <a href="http://faithful-trouble.surge.sh/" target="_blank" rel="noopener noreferrer">Go Jayhawks! </a>
                     <h2>Vue JS</h2>
                     <a href="https://github.com/Alexiskjg16/VueScoreboard" target="_blank" rel="noopener noreferrer" className="CodeList">View in Github</a>
                     </section> 
                     <section>
                 <a href="https://snowing-hangman.surge.sh" target="_blank" rel="noopener noreferrer" > Hangman </a>
                     <h2>React JS</h2>
                     <a href="https://github.com/Alexiskjg16/SnowmanGame" target="_blank" rel="noopener noreferrer" className="CodeList">View in Github</a>
                     </section>
                     <section>
                 <a href="https://weather-app.alexisgrisham.surge.sh" target="_blank" rel="noopener noreferrer"> WeatherAPI </a>
                     <h2>Javascript with APIs</h2>
                     <a href="https://github.com/Alexiskjg16/weather-app" target="_blank" rel="noopener noreferrer" className="CodeList">View in Github</a>
                     </section>
                     <section>
                 <a href="http://ngtacos.surge.sh/" target="_blank" rel="noopener noreferrer"> Random Taco Recipe Generator </a>
                     <h2> Angular JS with APIs</h2>
                     <a href="https://github.com/Alexiskjg16/ngtacos" target="_blank" rel="noopener noreferrer" className="CodeList">View in Github</a>
                     </section>
          </section>
        </body>
        <footer>
          <h1> Contact Me! </h1>
          <h1>Email: <a href="mailto:alexiskjg16@gmail.com">alexiskjg16@gmail.com</a></h1>
          <h1>Phone: <a href="tel:9413047266">941.304.7266</a></h1>
          <h1>LinkedIn: <a href="https://www.linkedin.com/in/alexis-grisham-434401169/" target="_blank" rel="noopener noreferrer">AlexisGrisham</a></h1>
        </footer>
      </div>
    );
  }
}

export default App;
