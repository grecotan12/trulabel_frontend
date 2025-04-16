import React from "react";
import { Introduction } from "./components/Introduction";
import { Carousel } from "./components/Carousel";
import { InstructionUse } from "./components/InstructionUse";
import { InstructionAccess } from "./components/InstructionAccess";
import { AppLink } from "./components/AppLink";

export const HomePage = () => {
    return(
        <div>
            <Introduction/>
            <Carousel/>
            <InstructionAccess/>
            <InstructionUse/>
            <AppLink/>
        </div>
    );
};