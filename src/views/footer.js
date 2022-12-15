import React, { PureComponent, memo } from "react";

import "../css/footer.css";

import {
    Alert
} from 'react-bootstrap';

export class Footer extends PureComponent
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
        <>
            <footer>
                <Alert>© {new Date().getFullYear()} Evan Svendsen</Alert>
            </footer>
        </>
        );
    }
}

export default memo(Footer);