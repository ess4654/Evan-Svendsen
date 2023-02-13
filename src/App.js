import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css';

import {
  avatar, cover
} from "./img";

import {
  Header,
  Footer,
  Info,
  InfoCredentials,
  InfoSkills,
  InfoGames,
  InfoGameJams,
  InfoFavoriteGames
} from './views';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="page">
        
        {/* Into Info */}
        <Info id="home">
          <div>
            <img className="cover" src={cover} />
            <img className="avatar" src={avatar} alt="Evan Svendsen" />
            <p style={{fontSize: 20}}>Evan Svendsen is a professional website and video game developer with over a decade of programming experience. He has 4 years of experience using Unity 3D for building, testing, and publishing games. He is also a full stack website developer with experience using React JS and Bootstrap for creating stunning websites.</p>
          </div>
        </Info>

        {/* Certificates */}
        <InfoCredentials />

        {/* Skills */}
        <InfoSkills />

        {/* Games */}
        <InfoGames />
        
        {/* Game Jams */}
        <InfoGameJams />

        {/* Favorite Games */}
        <InfoFavoriteGames />

        {/* Contact */}
        <Info id="contact" title="Contact">
          <p style={{textAlign: "left", fontSize: 24}}>
          📧Email: <a href="mailto:evan.svendsen.1997@gmail.com">evan.svendsen.1997@gmail.com</a>
          </p>
        </Info>

      </div>

      <Footer />
    </div>
  );
}

export default App;