import React, { memo } from "react";

import {
    Header,
    Footer,
} from '..';

const Page = ({ children, id }) => 
<>
<Header />
    <div className="page" id={id}>
        {children}
    </div>
<Footer />
</>;

export default memo(Page);