import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css';

import avatar from "./img/avatar.png";

import {
  Header,
  Footer,
  Info,
  InfoCredentials
} from './views';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="page">
        
        {/* Into Info */}
        <Info id="home">
          <div>
            <img src={avatar} alt="Evan Svendsen" />
            <p style={{fontSize:"18px"}}>Evan Svendsen is a professional website and video game developer with over a decade of programming experience. He has 4 years of experience using Unity 3D for building, testing, and publishing games. He is also a full stack website developer with experience using React JS and Bootstrap for creating stunning websites.</p>
          </div>
        </Info>

        {/* Certificates */}
        <InfoCredentials />

        {/* Skills */}
        <Info id="skills" title="Skills">
        </Info>

        {/* Games */}
        <Info id="games" title="Games Published">
        </Info>
        
        {/* Game Jams */}
        <Info id="jams" title="Game Jams">
        </Info>

        {/* Favorite Games */}
        <Info id="favorite-games" title="Favorite Games">
        </Info>

      </div>

      <Footer />
    </div>
  );
}

export default App;