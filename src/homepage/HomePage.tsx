import React from "react";
import { Introduction } from "./components/Introduction";
import { Carousel } from "./components/Carousel";

export const HomePage = () => {
    return(
        <div>
            <Introduction/>
            <Carousel/>
        </div>
    );
};