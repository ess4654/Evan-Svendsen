import React, { Component, memo } from "react";

import "../../css/credentials.css";

import {
    Card
} from 'react-bootstrap';

export class Credential extends Component
{
    render()
    {
        return(
            <a className="credential-link" href={this.props.href} target="_blank" rel="noreferrer">
            <Card className="credential">
                <h3 className="card-title" style={{...this.props.nameStyle}}>{this.props.name}</h3>
                <img className="card-img-top" src={this.props.src} alt={this.props.name} style={{minHeight: 160, ...this.props.srcStyle}} />
                <h6 style={{fontSize:11, color: "#636363", marginBottom: 0, marginTop: 2}}>{this.props.credentialID ? "Credential ID: " : ""}{this.props.credentialID}</h6>
                <h6 className="card-body">{this.props.description}</h6>
            </Card>
            </a>
        );
    }
}

export default memo(Credential);