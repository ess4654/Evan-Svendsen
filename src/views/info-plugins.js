import React, { PureComponent, memo } from "react";
import { Stencyl } from "../img/skill-icons";

import {
    Info,
    Credential
} from './index';

export class InfoPlugins extends PureComponent
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
    <>
    <Info id="plugins" title="Plugins">
      <div className="d-flex flex-wrap">
        <Credential
          href="https://github.com/ess4654/Unity-Primitives"
          src="https://raw.githubusercontent.com/ess4654/Unity-Primitives/main/Documentation~/Usage.png"
          name="Unity Primitives"
          description="Primitives is a lightweight package for Unity that adds additional primitive shapes to the 3D editor menu beyond the built-in ones."
        />
        
        <Credential
          href="https://github.com/ess4654/Stencyl-Extended-Math"
          src={Stencyl}
          srcStyle={{minHeight: 120, width: 120, alignSelf: "center"}}
          name="Stencyl Extended Math"
          description="An extension for the game engine Stencyl that adds extra math functions to make math calculations easier."
        />

        <Credential
          href="https://github.com/ess4654/Stencyl-Better-Logic"
          src={Stencyl}
          srcStyle={{minHeight: 120, width: 120, alignSelf: "center"}}
          name="Stencyl Better Logic"
          nameStyle={{fontSize: 30}}
          description="Extension for the Stencylworks game engine that adds better logic blocks such as switch case and ternary operator."
        />

        <Credential
          href="https://github.com/ess4654/Stencyl-Debugging-Extension"
          src={Stencyl}
          srcStyle={{minHeight: 120, width: 120, alignSelf: "center"}}
          name="Stencyl Debugging Extension"
          description="An extension for the Stencylworks game engine that adds better functionality for debugging."
        />
        
      </div>
    </Info>
    </>
    );
  }
}

export default memo(InfoPlugins);