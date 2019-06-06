import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import ShopContext from '../context/Context';

class Cart extends Component {
    static contextType = ShopContext;

    constructor() {
        super();
        this.state = {
            product: {}
        };
    }

    setProductPrice(price, discount) {
        if (discount > 0) return <React.Fragment>
            <s className="text-danger mr-2">₹ {price}</s>₹ {price - (price * discount / 100)}
        </React.Fragment>
        return '₹' + price;
    }

    getProductPriceValue(price, discount) {
        if (discount > 0) return price - (price * discount / 100);
        return price;
    }

    getTotalBillableAmount() {
        return this.context.cart.length > 0 ? this.context.cart.reduce((sum, x) => sum + this.getProductPriceValue(x.price, x.discount_percentage), 0) : 0;
        //return this.context.cart.length > 0 ? this.context.cart.reduce((sum, x) => sum + x.price, 0) : 0;
    }

    removeProductFromCart(itemName) {
        console.log('itemName ', itemName);
        this.context.removeProductFromCart(itemName);
    }

    render() {
        const { cart } = this.context;

        return (
            <div className="row bg-light mr-md-3 p-3 m-1 text-center overflow-hidden">
                <div className="col-md-12">
                    <div
                    // className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
                    >

                        {
                            cart.length === 0
                            &&
                            <div className="bg-white box-shadow mx-auto p-4" style={{ height: 120, borderRadius: 20 }}>
                                <p className="display-4 text-danger">Cart Empty!</p>
                            </div>
                        }

                        {
                            cart.length > 0
                            &&
                            cart.map((item, idx) => (
                                <div className="bg-white box-shadow mx-auto p-4 mt-3" style={{ height: 120, borderRadius: 20 }}>
                                    <div className="row">
                                        <div className="col-md-3">img</div>
                                        <div className="col-md-5 text-left">
                                            <h2 className="display-5">{item.name}</h2>
                                            <p>one line description</p>
                                        </div>
                                        <div className="col-md-3 text-left">
                                            <h6 className="card-title pricing-card-title text-success mt-2">
                                                {this.setProductPrice(item.price, item.discount_percentage)}
                                            </h6>
                                        </div>
                                        <div className="col-md-1">
                                            <a onClick={this.removeProductFromCart.bind(this, item.name)} style={{ cursor: 'pointer' }}>
                                                <FontAwesomeIcon icon="minus-circle" className="text-danger mt-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        <div className="row border-top m-3 p-3">
                            <div className="col-md-4"></div>
                            <div className="col-md-6 text-center">
                                <h3 className="display-6">Total Billable Amount:</h3>
                            </div>
                            <div className="col-md-2 p-1">
                                <h4>{this.getTotalBillableAmount()}/- ₹</h4>
                            </div>
                        </div>

                        <OverlayTrigger trigger="hover" placement="top" overlay={<Tooltip>Function not implemented</Tooltip>}>
                            <Button variant="outline-secondary" className="mt-3 float-right">
                                <FontAwesomeIcon icon="file-invoice" className="mr-1" />Checkout
                        </Button>
                        </OverlayTrigger>


                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;