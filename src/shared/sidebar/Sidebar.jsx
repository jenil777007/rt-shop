import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form'

class Sidebar extends Component {
    state = {}
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="border-bottom box-shadow text-center">
                    <h5 className="my-0 mr-md-auto m-4 font-weight-normal">rtShop</h5>
                </div>

                <div className="m-3">
                    <Form.Control type="text" placeholder="Search" />
                </div>

                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <span data-feather="home"></span>
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file"></span>
                                Orders
                </a>
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
                            <a className="nav-link" href="#a">
                                <span data-feather="file-text"></span>
                                Electronics
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">
                                <span data-feather="file-text"></span>
                                Fashion
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">
                                <span data-feather="file-text"></span>
                                Healthcare
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Sidebar;