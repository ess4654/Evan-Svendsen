import React, { memo } from "react";

import {
    avatar, cover
} from "../../img";

import {
    Info,
    InfoCredentials,
    InfoSkills,
    InfoGames,
    InfoGameJams,
    InfoPlugins,
    InfoFavoriteGames
} from '../';

import { Page } from "../pages";

const HomePage = () =>
<Page>
    {/* Into Info */}
    <Info id="home">
        <div>
            <img className="cover" src={cover} alt="Tech Skull" />
            <img className="avatar" src={avatar} alt="Evan Svendsen" />
            <p style={{fontSize: 18}}>
            As a self-employed Video Game Developer, I leverage my extensive programming skills and Unity 3D expertise to create captivating and immersive games for various platforms and clients. With over five years of experience in the game industry, I have successfully led and managed teams, delivered software solutions, and engaged in prototyping and early game design concept work.<br/><br/>
            I am proficient in web and mobile development, using technologies to build high-quality websites and apps. I enjoy working on diverse and challenging projects that require creativity, innovation, and problem-solving. My mission is to provide engaging and enjoyable experiences for users and customers through my passion for game development and technology.
            </p>
        </div>
    </Info>

    {/* Plugins */}
    <InfoPlugins />

    {/* Games */}
    <InfoGames />
        
    {/* Game Jams */}
    <InfoGameJams />

    {/* Certificates */}
    <InfoCredentials />

    {/* Skills */}
    <InfoSkills />

    {/* Favorite Games */}
    <InfoFavoriteGames />

    {/* Contact */}
    <Info id="contact" title="Contact">
        <p style={{textAlign: "left", fontSize: 24}}>
          📧Email: <a href="mailto:evan.svendsen.1997@gmail.com">evan.svendsen.1997@gmail.com</a><br/>
          Linked In: <a href="https://www.linkedin.com/in/evan-svendsen/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/evan-svendsen/</a><br/>
        <a href="/Resume%202023.pdf" download="Evan Svendsen.pdf">Resume / CV</a><br/>
        </p>
    </Info>
</Page>;

export default memo(HomePage);