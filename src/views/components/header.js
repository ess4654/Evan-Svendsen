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
                <a className="title" href="/#home"><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&nbsp;Evan Svendsen</a>
                <div className="btn-row" id="main">
                    <NavButton link="/#plugins" icon={faWrench} text="Plugins" />
                    <NavButton link="/#games" icon={faGamepad} text="Games" />
                    <NavButton link="/#certificates" icon={faCertificate} text="Certificates" />
                    <NavButton link="/#skills" icon={faStar} text="Skills" />
                    <NavButton link="/demo-reel#reel" icon={faUserTie} text="Demo Reel" />
                    <NavButton link="/#contact" icon={faEnvelope} text="Contact" />
                </div>
                <div className="btn-row" id="burger">
                    <NavButton icon={faBars} onClick={() => this.setState({ menuOpen: !this.state.menuOpen })} />
                </div>
                <div className={"nav-menu " + (this.state.menuOpen ? "open" : "closed")}>
                <NavButton link="/#plugins" icon={faWrench} text="Plugins" />
                    <NavButton link="/#games" icon={faGamepad} text="Games" />
                    <NavButton link="/#certificates" icon={faCertificate} text="Certificates" />
                    <NavButton link="/#skills" icon={faStar} text="Skills" />
                    {/*<NavButton link="/demo-reel#code" icon={faLaptopCode} text="Code" />*/}
                    <NavButton link="/demo-reel#spine" icon={faBezierCurve} text="Spine Animation" />
                    <NavButton link="/demo-reel#websites" icon={faGlobe} text="Websites" />
                    <NavButton link="/demo-reel#ui-ux" icon={faObjectGroup} text="UI/UX Design" />
                    <NavButton link="/#contact" icon={faEnvelope} text="Contact" />
                </div>
            </header>
        );
    }
}

export default Header;