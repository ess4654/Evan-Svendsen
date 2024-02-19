import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const NavButton = ({link, icon, text, onClick}) =>
{
    let scroll = (el) => {
        const yOffset = -60; // Adjust the offset to your liking
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    return (<HashLink to={link} scroll={scroll} onClick={onClick}><Button className="default"><FontAwesomeIcon icon={icon} />&nbsp;{text}</Button></HashLink>);
}
export default NavButton;