import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as firebase from 'firebase';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
// import Toast from 'react-bootstrap/Toast';

import ShopContext from '../context/Context';

class Product extends Component {

    static contextType = ShopContext;

    constructor() {
        super();
        this.state = {
            product: {},
            show: false,
        };
    }

    componentDidMount() {
        console.log('context');
        console.log(this.context);
        this.context.setIsLoaded(false);
        const { id } = this.props.match.params;
        const dbRef = firebase.database();
        const db = dbRef.ref().child(id);
        db.once('value', snap => {
            this.setState({
                product: snap.val()
            });
            console.log(this.state);
        }).then(() => {
            this.context.setIsLoaded(true);
        });
    }

    addProductToCart(product) {
        console.log('product ', product.name);
        if (this.context.cart.findIndex(o => o.name === product.name) >= 0) {
            this.handleShow();
            return false;
        }
        console.log('not found in the cart');
        this.context.addProductToCart(product);
    }

    handleShow = () => this.setState({ show: true });

    render() {
        const { product } = this.state;

        const { show } = this.state;
        // const handleShow = () => this.setState({ show: true });
        const handleClose = () => this.setState({ show: false });

        return (
            <div className="row bg-light mr-md-3 p-3 m-1 text-center overflow-hidden">
                <div className="col-md-6">
                    <div>
                        <div className="bg-white box-shadow mx-auto" style={{ width: 300, height: 300, borderRadius: 20 }}></div>
                    </div>
                </div>
                <div className="col-md-6 text-left">
                    <div className="my-3">
                        <h2 className="display-5">{product.name}</h2>
                        <p className="lead">
                            <Badge variant="success mr-2">
                                {product.star_ratings} <FontAwesomeIcon icon="star" className="ml-1" />
                            </Badge>
                            >{product.total_ratings} Ratings.
                        </p>
                        <h5 className="card-title pricing-card-title text-success mt-2">
                            {product.discount_percentage > 0 &&
                                <span><s className="text-danger mr-2">₹{product.price}</s> ₹{product.price - (product.price * product.discount_percentage / 100)}</span>}

                            {product.discount_percentage <= 0 &&
                                '₹' + product.price}

                        </h5>
                        <Button variant="outline-primary" className="mr-3" onClick={this.addProductToCart.bind(this, product)}>
                            <FontAwesomeIcon icon="cart-plus" className="mr-1" /> Add to Cart
                        </Button>
                        <p className="mt-3 lead">Details</p>
                        <p className="m-2">&#9679;&nbsp;&nbsp;Detail-1</p>
                    </div>
                </div>

                {/* <Toast onClose={handleClose} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                        Woohoo, you're reading this text in a Toast!
            </Toast.Body>
                </Toast> */}

            </div>

        );
    }
}

export default Product;