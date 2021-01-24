import React from "react";

const Content = ({ result }) => {
    return (
        <div className="article">
            <p>{result.author}</p>
            <p>{result.title}</p>
            <p>{result.publishedAt}</p>
            <p>{result.content}</p>
            <img src={result.urlToImage} alt="" />
        </div>
    );
};

export default Content;
