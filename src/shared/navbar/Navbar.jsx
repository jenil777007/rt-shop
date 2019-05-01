import React, { Component } from 'react';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h5 className="my-0 mr-md-auto font-weight-normal">Home</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="#c">Cart</a>
                    <a className="p-2 text-dark" href="#d">About</a>
                </nav>
                <a className="btn btn-outline-primary" href="#e">Log in</a>
            </div>
        );
    }
}

export default Navbar;