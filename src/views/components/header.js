import React, { Component, memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
    faBezierCurve,
    faCertificate, faEnvelope, faGamepad,
    faGlobe,
    faHouse, faLaptopCode, faObjectGroup, faStar, faUserTie, faWrench,
} from '@fortawesome/free-solid-svg-icons';

import "../../css/header.css";

import { NavButton } from "./";

export class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { menuOpen: false };
    }

    render()
    {
        return(
            <header className="header">
                <a className="title" href="/Evan-Svendsen/#home"><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&nbsp;Evan Svendsen</a>
                <div className="btn-row" id="main">
                    <NavButton link="/Evan-Svendsen/#plugins" icon={faWrench} text="Plugins" />
                    <NavButton link="/Evan-Svendsen/#games" icon={faGamepad} text="Games" />
                    <NavButton link="/Evan-Svendsen/#certificates" icon={faCertificate} text="Certificates" />
                    <NavButton link="/Evan-Svendsen/#skills" icon={faStar} text="Skills" />
                    <NavButton link="/Evan-Svendsen/demo-reel#reel" icon={faUserTie} text="Demo Reel" />
                    <NavButton link="/Evan-Svendsen/#contact" icon={faEnvelope} text="Contact" />
                </div>
                <div className="btn-row" id="burger">
                    <NavButton icon={faBars} onClick={() => this.setState({ menuOpen: !this.state.menuOpen })} />
                </div>
                <div className={"nav-menu " + (this.state.menuOpen ? "open" : "closed")}>
                <NavButton link="/Evan-Svendsen/#plugins" icon={faWrench} text="Plugins" />
                    <NavButton link="/Evan-Svendsen/#games" icon={faGamepad} text="Games" />
                    <NavButton link="/Evan-Svendsen/#certificates" icon={faCertificate} text="Certificates" />
                    <NavButton link="/Evan-Svendsen/#skills" icon={faStar} text="Skills" />
                    <NavButton link="/Evan-Svendsen/demo-reel#code" icon={faLaptopCode} text="Code" />
                    <NavButton link="/Evan-Svendsen/demo-reel#spine" icon={faBezierCurve} text="Spine Animation" />
                    <NavButton link="/Evan-Svendsen/demo-reel#websites" icon={faGlobe} text="Websites" />
                    <NavButton link="/Evan-Svendsen/demo-reel#ui-ux" icon={faObjectGroup} text="UI/UX Design" />
                    <NavButton link="/Evan-Svendsen/#contact" icon={faEnvelope} text="Contact" />
                </div>
            </header>
        );
    }
}

export default Header;