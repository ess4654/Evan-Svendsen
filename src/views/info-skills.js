import React, { PureComponent, memo } from "react";

import "../css/skills.css";

import {
    Info,
    Skill
} from './index';

import {
    csharp, cplusplus, c, haxe, python, java, BASIC,
    Unity, Unreal, Stencyl,
    html, css, js, react, php, CodeIgniter,
    RESTAPI, sql, aws, azure, postgre, firebase,
    android, ios, xamarin,
    windows, mac, linux,
    SpeechBubble, trumpet, PaintBrush, muscle
} from "../img/skill-icons";

export class InfoSkills extends PureComponent
{
  render()
  {
    return(
    <Info id="skills" title="Skills" style={{textAlign: "left"}}>
        <b><h5>Programming Languages</h5></b>
        <div className="d-flex flex-wrap">
            <Skill name="C#" icon={csharp} />
            <Skill name="C++" icon={cplusplus} />
            <Skill name="C" icon={c} />
            <Skill name="Haxe" icon={haxe} />
            <Skill name="Python" icon={python} />
            <Skill name="Java" icon={java} />
            <Skill name="BASIC" icon={BASIC} />
        </div>

        <b><h5>Game Development</h5></b>
        <div className="d-flex flex-wrap">
            <Skill name="Unity" icon={Unity} />
            <Skill name="Unreal" icon={Unreal} />
            <Skill name="Stencyl" icon={Stencyl} />
        </div>

        <b><h5>Website Development</h5></b>
        <div className="d-flex flex-wrap">
            <Skill name="HTML" icon={html} />
            <Skill name="CSS" icon={css} />
            <Skill name="JavaScript" icon={js} fontStyle={{fontSize: 22, paddingBottom: 6}} />
            <Skill name="React JS" icon={react} />
            <Skill name="PHP" icon={php} />
            <Skill name="Code Igniter" icon={CodeIgniter} fontStyle={{fontSize: 18, paddingBottom: 3, paddingTop: 3, fontWeight: "bolder"}}/>
        </div>

        <b><h5>Database & Cloud Computing</h5></b>
        <div className="d-flex flex-wrap">
            <Skill name="REST APIs" icon={RESTAPI} fontStyle={{fontSize: 24, paddingBottom: 4}} />
            <Skill name="SQL" icon={sql} />
            <Skill name="Amazon AWS" icon={aws} fontStyle={{fontSize: 17, paddingBottom: 6, paddingTop: 6, fontWeight: "bolder"}} />
            <Skill name="Azure" icon={azure} />
            <Skill name="Postgre" icon={postgre} />
            <Skill name="Firebase" icon={firebase} />
        </div>

        <b><h5>Mobile Development</h5></b>
        <div className="d-flex flex-wrap">
            <Skill name="Android" icon={android} />
            <Skill name="iOS" icon={ios} />
            <Skill name="Xamarin" icon={xamarin} />
        </div>

        <b><h5>Operating Systems</h5></b>
        <div className="d-flex flex-wrap">
            <Skill name="Windows" icon={windows} fontStyle={{fontSize: 26, paddingBottom: 3}} />
            <Skill name="Mac OSX" icon={mac} fontStyle={{fontSize: 24, paddingBottom: 5}} />
            <Skill name="Linux" icon={linux} />
        </div>

        <b><h5>Soft Skills</h5></b>
        <div className="d-flex flex-wrap">
            <Skill name="Communication" icon={SpeechBubble} fontStyle={{fontSize: 14, paddingBottom: 7, paddingTop: 7, fontWeight: "bolder"}} />
            <Skill name="Leadership" icon={trumpet} fontStyle={{fontSize: 21, paddingBottom: 5}} />
            <Skill name="Creativity" icon={PaintBrush} fontStyle={{fontSize: 24, paddingBottom: 4}} />
            <Skill name="Dedication" icon={muscle} fontStyle={{fontSize: 20, paddingBottom: 4}} />
        </div>
    </Info>
    );
  }
}

export default memo(InfoSkills);