import React from "react";

import Content from "./Content";
const Contents = ({ content }) => {
    // const article = props.content[0].articles
    // console.log('article', article)

    console.log("my content", content);

    return (
        <div>
            {content.map(result => (
                <div>
                    {result.title}
                </div>
            ))}
        </div>

    );
};

export default Contents;
