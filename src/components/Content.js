import React from "react";
import '../App.css'
const Content = ({ result }) => {

    const resultt = result.content



    return (
        <div className="article">
            <p>{result.title}</p>
            <p>{result.author}</p>

            <a href={result.url}>Source: {result.source.name}</a>
            <img id="image" src={result.urlToImage} alt="" />
            <p>{result.publishedAt}</p>


        </div>
    );
};

export default Content;
