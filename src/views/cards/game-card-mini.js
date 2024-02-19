import React, { Component, memo } from "react";

import "../../css/games.css";

import {
    Card
} from 'react-bootstrap';

export class GameCardMini extends Component
{
    render()
    {
        return(
            <Card className="game-mini">
                <h3 className="card-title">{this.props.name}</h3>
                <img className="card-img-top" src={this.props.icon} alt={this.props.name} style={{minHeight:160}} />
            </Card>
        );
    }
}

export default memo(GameCardMini);