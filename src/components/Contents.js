import React from "react";
import '../App.css'

import Content from "./Content";
const Contents = ({ content, articles }) => {

    return (
        <div id='container'>
            {


                (articles && content.length === 0) ? articles.map(result => (
                    <Content result={result} />
                )) : content.map(res => {

                    return <Content result={res} />
                })}
        </div>

    );
};

export default Contents;
