import React, { PureComponent, memo } from "react";
import classNames from "classnames";

import {
    Container
} from 'react-bootstrap';

export class Info extends PureComponent
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
        <>
        <Container id={this.props.id} className={classNames("mb-3", this.props.className)}>
          <h3 style={{textAlign: "start", textDecoration: "underline"}}>{this.props.title}</h3>
          {this.props.children}
        </Container>
        </>
        );
    }
}

export default memo(Info);