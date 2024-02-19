import React, { Component, memo } from "react";

import '../../css/card.css';
import '../../css/website.css';

import {
    Card
} from 'react-bootstrap';

export class Website extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            modalOpen: false
        };
        this.onKeyPress = this.onKeyPress.bind(this);
    }
    onKeyPress(event){
        console.log(event);
        if (event.key === "Escape") {
            this.setState({modalOpen: false});
        }
    }
    render()
    {
        return(<>
        <Card className="website-card m-2 p-2 d-inline-flex" onClick={() => this.setState({modalOpen: true})}>
            <img className="card-img-top d-flex flex-wrap card-website" src={this.props.src} alt={this.props.name} />
        </Card>
        <div className={!this.state.modalOpen ? "d-none" : ""} onClick={() => this.setState({modalOpen: false})}>
            <div className="modal-background" />
            <img className="card-img-top modal-img" src={this.props.src} alt={this.props.name} />
        </div>
        </>);
    }
}

export default memo(Website);