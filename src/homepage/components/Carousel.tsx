import React from "react";

export const Carousel = () => {
    return(
        <div className="container mt-5">
            <div className="carousel-title">
                <h3>These are top ingredients that are cancerous</h3>
            </div>
            <div id="food-carousel" className="carousel slide" data-bs-ride="carousel"> 
                <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={require('')} alt="processed meat" className="d-block"/>
                </div>
                <div className="carousel-item">
                <img src={require('')} alt="artifical food coloring" className="d-block"/>
                </div>
                <div className="carousel-item">
                <img src={require('')} alt="refined surgar" className="d-block"/>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#food-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#food-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
}