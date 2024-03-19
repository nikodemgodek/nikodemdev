import './App.scss';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function App() {
  return (
    <div className="App">
        <nav className="navbar-container">
          <h1>Nikodem.dev</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="hamburger">
            <RxHamburgerMenu />
          </div>
        </nav>
        <div className="wrapper">
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
          <div className="technology">
            <h3>Technology</h3>
            <div className="items">

              <div className="item-group">
                <FaHtml5 className="item" size={50} />
                <FaCss3Alt className="item" size={50} />
              </div>
              <div className="item-group">
                <RiJavascriptFill className="item" size={50} />
                <BiLogoTypescript className="item" size={50} />
              </div>
              <div className="item-group">
                <FaReact className="item" size={50} />
                <SiNextdotjs className="item" size={45} />
              </div>
              <div className="item-group">
                <SiTailwindcss className="item" size={50} />
                <FaSass className="item" size={45} />
              </div>
            
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="container">

          </div>
        </div>
        
    </div>
  );
}

export default App;
