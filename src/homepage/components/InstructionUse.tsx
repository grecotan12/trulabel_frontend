import React from "react";

export const InstructionUse = () => {
    return(
        <div className="container mb-5">
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header each-food">
                        <button className="accordion-button" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            How to use our web application
                        </button>
                    </h2>

                    <div className="accordion-collapse collapse show" id="collapseOne">
                        <div className="accordion-body">
                            <h2>Here are the steps to use the application</h2>
                            <p>1. After you sign in - click Check Ingredients on the navigation bar or click a button above</p>
                            <p>2. Upload your image. The application will scan for ingredients</p>
                            <p>3. The application will give you the ingredients analyze</p>
                            <p>Note: if the scan missed any ingredients you have option to manually input them</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}