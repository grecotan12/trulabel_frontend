import React from "react";

export const Footer = () => {
    return(
        <div className="footer-color ">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-5">
                <h4 className="col-md-4 mb-0">@TT Software, Inc</h4>
                <ul className="nav navbar-dark col-md-4 justify-content-end">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2"><i className="fa-brands fa-square-instagram fa-3x" id="ig"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2"><i className="fa-brands fa-facebook fa-3x social-icon"></i></a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}