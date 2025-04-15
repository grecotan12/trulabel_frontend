import React from "react";

export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light box-nav py-3">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">TruLabel</span>
                <button className="navbar-toggler" type="button"
                data-bs-toggle='collapse' data-bs-target="#navBarDrop"
                aria-control='navbarNavDropdown' aria-expanded='false'
                aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBarDrop">
                    <ul className="navbar-nav">
                        <li>
                            <a href="#" className="nav-link active">Home</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Check Label</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item m-1">
                            <a href="#" type="button" className="btn btn-outline-dark">Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};