import React from "react";
import '../App.css'

import Content from "./Content";
const Contents = ({ content }) => {

    return (
        <div id='container'>
            {content.map(result => (
                <Content result={result} />
            ))}
        </div>

    );
};

export default Contents;
