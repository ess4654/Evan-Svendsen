import React, { Component, memo } from "react";

import "../../css/skills.css";

import {
    Card
} from 'react-bootstrap';

export class Skill extends Component
{
    render()
    {
        return(
        <Card className="skill">
            <h3 className="card-title" style={this.props.fontStyle}>{this.props.name}</h3>
            <img className="card-img-top" src={this.props.icon} alt={this.props.name} />
        </Card>
        );
    }
}

export default memo(Skill);