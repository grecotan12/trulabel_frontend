import React from "react";
import IngredientModel from "../../models/IngredientModel";

export const IngredientCard: React.FC<{ingredient: IngredientModel}> = (props) => {
    return(
        <div className="card" style={{ width: 500}}>
            <div className="card-body">
                <h3 className="card-title each-food">{props.ingredient.title}</h3>
                <h3 className="each-food">Definition</h3>
                <p className="card-text">{props.ingredient.definition}</p>
                <h3 className="each-food">Canerous Rating</h3>
                <h4>{props.ingredient.cancerous_rating}</h4>
                <h3 className="each-food">Alternatives</h3>
                <p>{props.ingredient.alternatives}</p>
            </div>
        </div>
    );
}