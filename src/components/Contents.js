import React from "react";
import '../App.css'
import Styles from './contents.css'
import Content from "./Content";
const Contents = ({ content, articles, search }) => {

    return (
        <div className={`${search.length === 0 ? 'container-premier' : 'd-flex flex-wrap justify-content-center'}`}>
            {
                search ?

                    ((articles && content.length === 0) ? articles.map(result => (
                        <Content searchActive={true} result={result} />
                    )) : content.map(res => {

                        return <Content searchActive={true} result={res} />
                    })) : articles.map(res => {

                        return <Content result={res} />
                    })}
        </div>

    );
};

export default Contents;
