import React from "react";

export const InstructionAccess = () => {
    return(
        <div className="container mb-5">
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header each-food">
                        <button className="accordion-button" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            How to access to use the web application
                        </button>
                    </h2>

                    <div className="accordion-collapse collapse show" id="collapseOne">
                        <div className="accordion-body">
                            <h2>Here are the steps to access</h2>
                            <p>1. Click Sign In on the right navigation bar</p>
                            <p>2. You will be direct to an access page. If you have an account just put in your username and password</p>
                            <p>3. Otherwise click Sign Up button on the page.</p>
                            <p>4. Now you are at Sign Up page - Fill out the required input</p>
                            <p>5. Click submit then you will be redirect to the sign in page</p>
                            <p>6. Login and click on Check Ingredients/ link on the navigation bar or button above to start using</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}