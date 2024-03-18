import './App.scss';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function App() {
  return (
    <div className="App">
        <nav className="navbar-container">
          <p>Nikodem.dev</p>
          <ul>
            <li>
              <a href="#linch">Projects</a>
            </li>
            <li>
              <a href="#xd">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="about">
            <div>
              <h1 className="head-paragraph">React Developer</h1>
              <span className="aboutme-paragraph">My name is Nikodem and I am a passionate React Developer based in Wrocław, Poland. 📍</span>
            </div>
            <div className="icons-container">
              <div className="item">
                <FaGithub size={30}/>
              </div>
              
              <div className="item">
                <FaLinkedinIn size={30}/>
              </div>

            </div>
            
          </div>
          <div className="avatar-container">
            <div className="avatar">
              <img alt="Woman" src={require('./resources/woman.jpg')} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
