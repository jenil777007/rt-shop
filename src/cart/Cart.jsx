import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

class Cart extends Component {
    state = {}
    render() {
        return (
            <div className="row bg-light mr-md-3 p-3 m-1 text-center overflow-hidden">
                <div className="col-md-12">
                    <div
                    // className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
                    >

                        <div className="bg-white box-shadow mx-auto p-4" style={{ height: 120, borderRadius: 20 }}>
                            <p className="display-4 text-danger">Cart Empty!</p>
                        </div>

                        <div className="bg-white box-shadow mx-auto p-4 mt-3" style={{ height: 120, borderRadius: 20 }}>
                            <div className="row">
                                <div className="col-md-4">img</div>
                                <div className="col-md-6 text-left">
                                    <h2 className="display-5">Product name</h2>
                                    <p>one line description</p>
                                </div>
                                <div className="col-md-2 text-left">
                                    <h5 className="card-title pricing-card-title text-success mt-2">₹399</h5>
                                </div>
                            </div>
                        </div>

                        <div className="row border-top m-3 p-3">
                            <div className="col-md-4"></div>
                            <div className="col-md-6 text-center">
                                <h3 className="display-6">Total:</h3>
                            </div>
                            <div className="col-md-2">
                                <h5>399</h5>
                                <h5>+ 499</h5>
                            </div>
                        </div>

                        <Button variant="outline-primary" className="mt-3 float-right">
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;