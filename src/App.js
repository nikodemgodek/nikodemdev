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

import { useState, useEffect } from 'react';

function App() {

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlHeaderVisibility = () => {

    if(window.scrollY < lastScrollY) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }

    setLastScrollY(window.scrollY);
  }

  useEffect( () => {
    window.addEventListener('scroll', controlHeaderVisibility);

    return () => {
      window.removeEventListener('scroll', controlHeaderVisibility);
    }
    
  }, [lastScrollY] );

  return (
    <div className="App">
        {showHeader && <nav id="navbar" className="navbar-container">
          <h1 className="logo">Nikodem.dev</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#section-aboutme">About me</a></li>
            <li><a href="#section-projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="hamburger">
            <RxHamburgerMenu />
          </div>
        </nav>}
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
                <img width="100%" height="100%" alt="Woman" src={require('./resources/me.jpg')} />
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
        <section id="section-aboutme">
          <div className="about-flex">
            <div className="container-picture">
              <img src={require('./resources/workspace.jpg')} alt="Simple picturexd" />
            </div>
            <div className="container-about">
              <span className="header">About me</span>
              <h4 className="position">React Developer, Poland</h4>
              <span className="text">Hey, my name is Nikodem Godek, and I'm a React Developer. My passion is to create and develop a clean UI/UX for my users.</span>
              <span className="text">My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.</span>
            </div>
          </div>
        </section>

        <section id="section-projects">
          <h1>Portfolio</h1>
          <div className="project-container">
            <div className="project-image">
              <img width="100%" height="100%" src={require('./resources/workspace.jpg')} alt="Simple picturexd" />
            </div>
            <div className="project-details">
              <div className="project-header">
                <h2>Weather & Forecast</h2>
                <div className="group">
                <p className="live">Live</p>
                <p className="live">Code</p>
                </div>
                
              </div>
              <div className="project-description">
                <span>The app allows users to subscribe their favorite twitch streamers, and watch streams that they have missed. User then can add their own channels and/or remove them. Mark videos as watched and bookmarked.</span>
              </div>
              <div className="project-technology-used">
                <h3>NextJS</h3>
                <h3>React</h3>
                <h3>Redux</h3>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div className="project-image">
              <img width="100%" height="100%" src={require('./resources/workspace.jpg')} alt="Simple picturexd" />
            </div>
            <div className="project-details">
              <div className="project-header">
                <h2>Weather & Forecast</h2>
                <div className="group">
                <p className="live">Live</p>
                <p className="live">Code</p>
                </div>
                
              </div>
              <div className="project-description">
                <span>The app allows users to subscribe their favorite twitch streamers, and watch streams that they have missed. User then can add their own channels and/or remove them. Mark videos as watched and bookmarked.</span>
              </div>
              <div className="project-technology-used">
                <h3>React Native</h3>
                <h3>React</h3>
                <h3>Redux</h3>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
