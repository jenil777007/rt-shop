import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h5 className="my-0 mr-md-auto font-weight-normal">Home</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/cart" className="p-2 text-dark">
                        <FontAwesomeIcon icon="shopping-cart" className="mr-2" />
                        Cart
                        </Link>
                    <Link to="/about" className="p-2 text-dark">
                        <FontAwesomeIcon icon="exclamation" className="mr-2" />
                        About
                    </Link>
                </nav>
                <a className="btn btn-outline-primary" href="#e">Log in</a>
            </div>
        );
    }
}

export default Navbar;