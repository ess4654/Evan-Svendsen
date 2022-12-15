import React, { Component, memo } from "react";

import "../css/credentials.css";

import {
    Card
} from 'react-bootstrap';

import test from "../img/credentials/c_sharp_certificate.png";

export class Credential extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
        <>
            <a className="credential-link" href={this.props.href} target="_blank">
            <Card className="credential">
                <h3 className="card-title">{this.props.name}</h3>
                <img className="card-img-top" src={test} alt={this.props.name} style={{minHeight:160}} />
                <h6 style={{fontSize:11, color: "#636363", marginBottom: 0, marginTop: 2}}>Credential ID: qFpyvms--FrqeFjboeKNog</h6>
                <h6 className="card-body">{this.props.description}</h6>
            </Card>
            </a>
        </>
        );
    }
}

export default memo(Credential);