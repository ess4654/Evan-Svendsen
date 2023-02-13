import React, { PureComponent, memo } from "react";

import {
    Info,
    Credential
} from './index';

import csharp from "../img/credentials/c_sharp_certificate.png";
import azureAI from "../img/credentials/azure_ai_certificate.png";

export class InfoCredentials extends PureComponent
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
    <>
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
    </>
    );
  }
}

export default memo(InfoCredentials);