import React, { useEffect, useState } from "react";
import IngredientModel from "../../models/IngredientModel";
import { IngredientCard } from "./IngredientCard";

export const Carousel = () => {
    const [ingredients, setIngredients] = useState<IngredientModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchIngredients = async () => {
            const baseUrl: string = "http://localhost:8080/api/ingredients";

            const url: string = `${baseUrl}?page0&size=3`;

            const response = await fetch(url);

            const responseJson = await response.json();

            const responseData = responseJson._embedded.ingredients;

            const loadedIngredients: IngredientModel[] = [];

            for (const key in responseData) {
                loadedIngredients.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    definition: responseData[key].definition,
                    cancerous_rating: responseData[key].cancerous_rating,
                    alternatives: responseData[key].alternatives
                });
            }

            setIngredients(loadedIngredients);
            setIsLoading(false);
        };

        fetchIngredients().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [])

    if (isLoading) {
        return(
            <div className="container mt-5 mb-5">
                <p>Loading...</p>
            </div>
        );
    }

    if (httpError) {
        return(
            <div className="container mt-5 mb-5">
                <p>{httpError}</p>
            </div>
        );
    }

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
                        <div className="row d-flex justify-content-center align-items-center">
                            <IngredientCard ingredient={ingredients[0]} key={ingredients[0].id} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center align-items-center">
                            <IngredientCard ingredient={ingredients[1]} key={ingredients[1].id} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center align-items-center">
                            <IngredientCard ingredient={ingredients[2]} key={ingredients[2].id} />
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