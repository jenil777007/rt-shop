import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Form from 'react-bootstrap/Form';

import ShopContext from '../../context/Context';

class Sidebar extends Component {
    static contextType = ShopContext;
    state = {};

    filterProductsByCategory = (category) => {
        console.log('selected category', category);
        this.context.filterProductsByCategory(category);
    };

    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="border-bottom box-shadow text-center">
                    <Link to="home">
                        <h5 className="my-0 mr-md-auto m-4 font-weight-normal">rtShop</h5>
                    </Link>
                </div>

                <div className="m-3">
                    <Form.Control type="text" placeholder="Search" />
                </div>

                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active">
                                <span data-feather="home"></span>
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Category</span>
                        <a className="d-flex align-items-center text-muted" href="#">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.filterProductsByCategory.bind(this, 'All')}>
                                <span data-feather="file-text"></span>
                                All
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.filterProductsByCategory.bind(this, 'Tools')}>
                                <span data-feather="file-text"></span>
                                Tools
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.filterProductsByCategory.bind(this, 'Kids')}>
                                <span data-feather="file-text"></span>
                                Kids
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.filterProductsByCategory.bind(this, 'Books')}>
                                <span data-feather="file-text"></span>
                                Books
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Sidebar;