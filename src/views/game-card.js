import React, { Component, memo } from "react";

import "../css/games.css";

import {
    Card
} from 'react-bootstrap';

export class Game extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
        <>
        <a className="game-link" href={this.props.href}>
        <Card className="game">
            <h3 className="card-title">{this.props.name}</h3>
            <h6>{this.props.jam}</h6>
            <img className="card-img-top" src={this.props.screenshot} alt={this.props.name} style={{maxWidth: 300, maxHeight: 212, borderRadius: 5}} />
            <p className="description" style={{...this.props.descriptionStyle, top: (this.props.jam ? 80 : 60)}}>{this.props.description}</p>
            <h3 style={{position: "absolute", right: 30}}>{this.props.year}</h3>
        </Card>
        </a>
        </>
        );
    }
}

export default memo(Game);