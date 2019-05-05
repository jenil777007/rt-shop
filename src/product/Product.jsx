import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

class Product extends Component {
    state = {}
    render() {
        return (
            <div className="row bg-light mr-md-3 p-3 m-1 text-center overflow-hidden">
                <div className="col-md-6">
                    <div
                    // className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
                    >

                        <div className="bg-white box-shadow mx-auto" style={{ width: 300, height: 300, borderRadius: 20 }}></div>
                    </div>
                </div>
                <div className="col-md-6 text-left">
                    <div className="my-3">
                        <h2 className="display-5">Product name</h2>
                        <p className="lead"><Badge variant="success mr-2">4.6</Badge>>100 Ratings.</p>
                        <h5 className="card-title pricing-card-title text-success mt-2"><s className="text-danger mr-2">₹699</s>₹399</h5>
                        <Button variant="outline-primary" className="mr-3">
                            Add to Cart
                        </Button>
                        <Button variant="outline-dark" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button>
                        <p className="mt-3 lead">Details</p>
                        <p className="m-2">&#9679;&nbsp;&nbsp;Detail-1</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;