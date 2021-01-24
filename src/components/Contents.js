import React from "react";

import Content from "./Content";
const Contents = ({ content }) => {

    return (
        <div>
            {content.map(result => (
                <Content result={result} />
            ))}
        </div>

    );
};

export default Contents;
