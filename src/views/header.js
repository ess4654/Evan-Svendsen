import React, { PureComponent, memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHouse,
} from '@fortawesome/free-solid-svg-icons';

import "../css/header.css";

import {
    Button
} from 'react-bootstrap';

export class Header extends PureComponent
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
        <>
            <header className="header">
                <a className="title" href="#home"><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&nbsp;Evan Svendsen</a>
                <div className="btn-row">
                    <a href="#certificates"><Button className="default">Certificates</Button></a>
                    <a href="#skills"><Button className="default">Skills</Button></a>
                    <a href="#games"><Button className="default">Games</Button></a>
                    <a href="#jams"><Button className="default">Game Jams</Button></a>
                    <a href="#contact"><Button className="default">Contact</Button></a>
                </div>
            </header>
        </>
        );
    }
}

export default memo(Header);