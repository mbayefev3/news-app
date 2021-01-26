import React from "react";
import '../App.css'

import Content from "./Content";
const Contents = ({ content, articles, search }) => {

    return (
        <div id='container'>
            {
                search ?

                    ((articles && content.length === 0) ? articles.map(result => (
                        <Content result={result} />
                    )) : content.map(res => {

                        return <Content result={res} />
                    })) : articles.map(res => {

                        return <Content result={res} />
                    })}
        </div>

    );
};

export default Contents;
