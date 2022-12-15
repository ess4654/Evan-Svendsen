import React, { PureComponent, memo } from "react";
import classNames from "classnames";

import {
    Container
} from 'react-bootstrap';

import {
    Info,
    Credential
} from './index';

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
              src="../img/c# certificate.png"
              name="CodinGame Certification - C#"
              description="RECOGNIZED FULLY CAPABLE AND SKILLED IN
              C# PROBLEM SOLVING" />
            
            <Credential
              href="/#"
              src="../img/c# certificate.png"
              name="Test"
              description="Description" />
            
            <Credential
              href="/#"
              src="../img/c# certificate.png"
              name="Test"
              description="Description" />
            
            <Credential
              href="/#"
              src="../img/c# certificate.png"
              name="Test"
              description="Description" />
          </div>
        </Info>
        </>
        );
    }
}

export default memo(InfoCredentials);