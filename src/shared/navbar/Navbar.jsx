import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import ShopContext from '../../context/Context';

class Navbar extends Component {
    static contextType = ShopContext;

    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h5 className="my-0 mr-md-auto font-weight-normal">Home</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/cart" className="p-2 text-dark">
                        <FontAwesomeIcon icon="shopping-cart" />
                        <sup className="mr-2" >
                            <Badge variant="light">{this.context.cart.length}</Badge>
                        </sup>
                        Cart
                        </Link>
                </nav>
                <OverlayTrigger trigger="hover" placement="bottom" overlay={<Tooltip>Function not implemented</Tooltip>}>
                    <a className="btn btn-outline-secondary" href="#e">Log in</a>
                </OverlayTrigger>

            </div>
        );
    }
}

export default Navbar;