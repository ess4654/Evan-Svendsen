import React, { memo } from "react";

import "../../css/code.css";

import { Page } from "../pages";
import { Website } from "../cards";
import { Info } from "../info-section";
import { Video, Code } from "../components";

import {
    ExtendedStrings,
    ExtendedStringsTests,
    ExtendedTextures,
    ExtendedTextureTests
} from "../../code";
import { spine1, spine2 } from "../../videos";

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

//load data from script files
var extendedStrings = "";
fetch(ExtendedStrings)
 .then(r => r.text())
 .then(text => {
    extendedStrings = text;
});

var extendedStringsTests = "";
fetch(ExtendedStringsTests)
 .then(r => r.text())
 .then(text => {
    extendedStringsTests = text;
});

var extendedTextures = "";
fetch(ExtendedTextures)
 .then(r => r.text())
 .then(text => {
    extendedTextures = text;
});

var extendedTextureTests = "";
fetch(ExtendedTextureTests)
 .then(r => r.text())
 .then(text => {
    extendedTextureTests = text;
});

const DemoReel = () =>
<Page>
    <h2 id="reel" style={{fontWeight: "bold"}}>DEMO REEL</h2>
    
    {/* Code */}
    <Info id="code" title="Code Examples">
        <p>
            The following are examples of C# Unity scripts that are taken from my Asset Store package <a href="#" onClick={() => alert("Asset pending Unity approval.")}>UExtensions</a>. 
            The asset store pack contains more than 70 scripts and over 1000 extension methods to extend the functionality of C# and Unity specific classes.
            The entire package is well documented including examples of using each method, and all scripts are unit tested. I have paired here the script and it's corresponding unit
            test which demonstrates how I write production quality bug tested code. You are welcome to download these scripts and use them in your project for free, and if you want the complete toolset feel free to purchase the asset <a href="#" onClick={() => alert("Asset pending Unity approval.")}>here</a>.
        </p>
        <Code
            code={extendedStrings}
            language="csharp"
            header="Extended Strings"
            filename="ExtendedStrings.cs"
        />
        <Code
            code={extendedStringsTests}
            language="csharp"
            header="Extended String Tests"
            filename="ExtendedStringTests.cs"
        />
        <Code
            code={extendedTextures}
            language="csharp"
            header="Extended Textures"
            filename="ExtendedTextures.cs"
        />
        <Code
            code={extendedTextureTests}
            language="csharp"
            header="Extended Texture Tests"
            filename="ExtendedTextureTests.cs"
        />
    </Info>

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