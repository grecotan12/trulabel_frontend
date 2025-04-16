import React from "react";

export const Carousel = () => {
    return(
        <div className="container mt-5 mb-5">
            <div className="carousel-title">
                <h3>These are top ingredients that are cancerous</h3>
            </div>
            <div id="food-carousel" className="carousel slide" data-bs-ride="carousel"> 
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('./../../images/processed_meat.jpeg')} alt="processed meat" className="d-block intro-img"/>
                        <div className="carousel-caption">
                            <h3 className="each-food">Processed Meat</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require('./../../images/aspartame.jpg')} alt="artifical sweeteners" className="d-block intro-img"/>
                        <div className="carousel-caption">
                            <h3 className="each-food">Artificial Sweeteners</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require('./../../images/transfats.png')} alt="trans-fat in fried and oil food" className="d-block intro-img"/>
                        <div className="carousel-caption">
                            <h3 className="each-food">Trans-fat in unhealthy food</h3>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#food-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon icon-carousel"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#food-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon icon-carousel"></span>
                </button>
            </div>
            <div className="mt-3 d-flex d-wrap justify-content-center align-items-center">
                <button className="btn btn-outline-primary btn-lg">Check Your Ingredients</button>
            </div>
        </div>
    );
}