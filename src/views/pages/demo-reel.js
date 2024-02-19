import React, { memo } from "react";

import { Page } from "../pages";
import { Website } from "../cards";
import { Info } from "../info-section";
import { Video } from "../components";

import {
    hikerLink,
    meeseFlock,
    mrCoolIcecream,
    smogReport
} from "../../img/websites";

import {
    hdsSandbox,
    hdsStickers,
    cds,
    beatTheMarkets1,
    beatTheMarkets2,
    studCollector
} from "../../img/ux-ui";

const spine1 = require('../../videos/Spine_Phaser.mp4');
const spine2 = require('../../videos/Spine_Arcade.mp4');

const DemoReel = () =>
<Page>
    <h2 id="reel" style={{fontWeight: "bold"}}>DEMO REEL</h2>
    
    {/* Code */}
    {/*<Info id="code" title="Code Examples">

    </Info>*/}

    {/* Spine Animations */}
    <Info id="spine" title="Spine Animations">
        <Video url={spine1} description="The above example is the implementation of a spine animation in Phaser3 web framework. The coin and the girl both use spine animation .skel files. The girl also implements the use of spine skins as the color of her clothes and her hair are set with the skin feature." />
        <Video url={spine2} description="The above example is of a spine implementation in Unity for an arcade style fighting game. The characters are animated with spine on the selection screen. The tiny version of the locked character in the bottom right is also a spine animation." />
    </Info>

    {/* Websites */}
    <Info id="websites" title="Website Design">
        <Website src={hikerLink} name="Hiker Link" />
        <Website src={mrCoolIcecream} name="Mr Cool Ice Cream" />
        <Website src={meeseFlock} name="Meese Flock" />
        <Website src={smogReport} name="Smog Reports" />
    </Info>
    
    {/* UI / UX */}
    <Info id="ui-ux" title="UI / UX Design">
        <Website src={hdsSandbox} name="Meese Flock" />
        <Website src={hdsStickers} name="Meese Flock" />
        <Website src={cds} name="Mr Cool Ice Cream" />
        <Website src={beatTheMarkets1} name="Meese Flock" />
        <Website src={beatTheMarkets1} name="Meese Flock" />
        <Website src={beatTheMarkets2} name="Meese Flock" />
        <Website src={studCollector} name="Mr Cool Ice Cream" />
    </Info>
</Page>;

export default memo(DemoReel);