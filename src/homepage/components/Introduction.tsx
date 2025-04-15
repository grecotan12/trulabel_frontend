import React from "react";

export const Introduction = () => {
    return(
        <div className="img-container">
            <img src={require('./../../images/image-one.jpg')} alt="Intro Image" className="intro-img" />
            <div className="intro-text">Learn food ingredients is good or bad</div>
        </div>
    );
}