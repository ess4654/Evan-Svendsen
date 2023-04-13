import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css';

import {
  avatar, cover
} from "./img";

//import {x} from "./Resume 2023.pdf"

import {
  Header,
  Footer,
  Info,
  InfoCredentials,
  InfoSkills,
  InfoGames,
  InfoGameJams,
  InfoPlugins,
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
            <img className="cover" src={cover} alt="Tech Skull" />
            <img className="avatar" src={avatar} alt="Evan Svendsen" />
            <p style={{fontSize: 20}}>Evan Svendsen, a multifaceted software developer, combines a decade of programming expertise with a
strong background in web, game, and mobile development. As a Unity 3D specialist, Evan adeptly builds,
tests, and publishes immersive games, while his full stack web development skills, including React JS and
Bootstrap, enable him to create stunning, user-friendly websites. Proficient in both Android and iOS
mobile development, Evan consistently delivers high-quality results across diverse projects.
His commitment to continuous learning and exceptional soft skills, such as communication and leadership,
make Evan an invaluable asset to companies ranging from startups to industry leaders.</p>
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

        {/* Plugins */}
        <InfoPlugins />

        {/* Favorite Games */}
        <InfoFavoriteGames />

        {/* Contact */}
        <Info id="contact" title="Contact">
          <p style={{textAlign: "left", fontSize: 24}}>
          📧Email: <a href="mailto:evan.svendsen.1997@gmail.com">evan.svendsen.1997@gmail.com</a><br/>
          Linked In: <a href="https://www.linkedin.com/in/evan-svendsen/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/evan-svendsen/</a><br/>
          <a href={window.location.href + "/Resume%202023.pdf"} download="Evan Svendsen.pdf">Resume / CV</a><br/>
          </p>
        </Info>

      </div>

      <Footer />
    </div>
  );
}

export default App;