import React, { Component, memo } from "react";

import "../css/credentials.css";

import {
    Card
} from 'react-bootstrap';

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
                <img className="card-img-top" src={this.props.src} alt={this.props.name} style={{minHeight:160}} />
                <h6 style={{fontSize:11, color: "#636363", marginBottom: 0, marginTop: 2}}>{this.props.credentialID ? "Credential ID: " : ""}{this.props.credentialID}</h6>
                <h6 className="card-body">{this.props.description}</h6>
            </Card>
            </a>
        </>
        );
    }
}

export default memo(Credential);