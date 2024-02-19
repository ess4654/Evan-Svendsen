import React, { PureComponent, memo } from "react";
import { csharp, azureAI } from "../img/credentials";

import {
    Info,
    Credential
} from './index';

export class InfoCredentials extends PureComponent
{
  render()
  {
    return(
    <Info id="certificates" title="Certificates">
      <div className="d-flex flex-wrap">
        <Credential
          href="https://www.codingame.com/certification/qFpyvms--FrqeFjboeKNog"
          src={csharp}
          name="CodinGame Certification - C#"
          description="RECOGNIZED FULLY CAPABLE AND SKILLED IN
          C# PROBLEM SOLVING"
          credentialID="qFpyvms--FrqeFjboeKNog"
        />
        
        <Credential
          href="https://www.credly.com/badges/1d13ef7e-0bb6-494a-b1c7-39d72e176001/linked_in_profile"
          src={azureAI}
          name="Microsoft: Azure AI Fundamentals"
          description="Demonstrated foundational knowledge of machine learning (ML) and AI."
        />
        
      </div>
    </Info>
    );
  }
}

export default memo(InfoCredentials);