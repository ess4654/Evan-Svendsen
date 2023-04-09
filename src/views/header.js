import React, { PureComponent, memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCertificate, faEnvelope, faGamepad,
    faHouse, faStar, faWrench,
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
                    <a href="#certificates"><Button className="default"><FontAwesomeIcon icon={faCertificate} />&nbsp;Certificates</Button></a>
                    <a href="#skills"><Button className="default"><FontAwesomeIcon icon={faStar} />&nbsp;Skills</Button></a>
                    <a href="#games"><Button className="default"><FontAwesomeIcon icon={faGamepad} />&nbsp;Games</Button></a>
                    <a href="#plugins"><Button className="default"><FontAwesomeIcon icon={faWrench} />&nbsp;Plugins</Button></a>
                    <a href="#contact"><Button className="default"><FontAwesomeIcon icon={faEnvelope} />&nbsp;Contact</Button></a>
                </div>
            </header>
        </>
        );
    }
}

export default memo(Header);