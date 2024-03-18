import './App.scss';

function App() {
  return (
    <div className="App">
        <nav className="navbar-container">
          <p>Nikodem.dev</p>
          <ul>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="about">
            <p className="head-paragraph">React Developer</p>
            <span className="aboutme-paragraph">Hi, I'm Nikodem Godek. A passionate React Developer based in Wrocław, Poland. 📍</span>
          </div>
          <div className="avatar-container">
            <div className="avatar">

            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
