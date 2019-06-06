import React, { Component } from 'react';

import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Badge from 'react-bootstrap/Badge';

import ShopContext from '../context/Context';

class Home extends Component {
    static contextType = ShopContext;

    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
    }

    openProduct(productId) {
        console.log('product id ' + productId);
        this.props.history.push("product/" + productId);
    }

    setProductPrice(price, discount) {
        if (discount > 0) return <React.Fragment><s className="text-danger mr-2">₹ {price}</s>₹ {price - (price * discount / 100)}</React.Fragment>
        return '₹' + price;
    }

    constructProductsBody(item, idx) {

        const normalProductBody =
            <div className="card mb-4 box-shadow" style={{ cursor: 'pointer' }} onClick={this.openProduct.bind(this, idx)}>
                <div className="card-body">
                    <div className="row float-right">
                        <Badge variant="danger">{item.category}</Badge>
                    </div>
                    <div className="mt-4" style={{ height: '150px' }}>
                        <Badge variant="success" style={{ top: '35px', left: '11px', position: 'absolute' }}>{item.discount_percentage}% Off</Badge>
                        <Image style={{ height: '150px', width: '150px', backgroundColor: 'black' }} rounded />
                    </div>
                    <h5 className="card-title pricing-card-title text-success mt-2">{this.setProductPrice(item.price, item.discount_percentage)}</h5>
                </div>
                <div className="card-footer">
                    <h5 className="my-0 font-weight-normal">{item.name}</h5>
                </div>
            </div>;

        if (idx === 0) return '<div className="card-deck mb-3 text-center">' + normalProductBody;
        if (idx % 3 === 0 && idx !== 0) return '</div> <div className="card-deck mb-3 text-center">' + normalProductBody;
        return normalProductBody;
    }

    render() {

        const { products } = this.context;

        return (
            <React.Fragment>


                {
                    products.map((item, idx) => (
                        this.constructProductsBody(item, idx)

                        // <div className="card mb-4 box-shadow">
                        //     <div className="card-body">
                        //         <div className="row float-right">
                        //             <Badge variant="danger">{item.category}</Badge>
                        //         </div>
                        //         <div className="mt-4" style={{ height: '150px' }}>
                        //             <Image style={{ height: '150px', width: '150px', backgroundColor: 'black' }} rounded />
                        //         </div>
                        //         <h5 className="card-title pricing-card-title text-success mt-2">₹ {item.price}</h5>
                        //     </div>
                        //     <div className="card-footer">
                        //         <h5 className="my-0 font-weight-normal">{idx} {item.name}</h5>
                        //     </div>
                        // </div>
                    ))
                }

                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                            <div className="row float-right">
                                <OverlayTrigger trigger="hover" placement="top" overlay={<Tooltip>Category.</Tooltip>}>
                                    <Badge variant="danger">Electronics</Badge>
                                </OverlayTrigger>
                            </div>
                            <div className="mt-4" style={{ height: '150px' }}>
                                <Image style={{ height: '150px', width: '150px', backgroundColor: 'black' }} rounded />
                            </div>
                            <h5 className="card-title pricing-card-title text-success mt-2">₹399</h5>
                        </div>
                        <div className="card-footer">
                            <h5 className="my-0 font-weight-normal">Product 1</h5>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                            <div className="row float-right">
                                <OverlayTrigger trigger="hover" placement="top" overlay={<Tooltip>Category.</Tooltip>}>
                                    <Badge variant="warning">Fashion</Badge>
                                </OverlayTrigger>
                            </div>
                            <div className="mt-4" style={{ height: '150px' }}>
                                <Image style={{ height: '150px', width: '150px', backgroundColor: 'black' }} rounded />
                            </div>
                            <h5 className="card-title pricing-card-title text-success mt-2"><s className="text-danger mr-2">₹699</s>₹399</h5>
                        </div>
                        <div className="card-footer">
                            <h5 className="my-0 font-weight-normal">Product 2</h5>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                            <div className="row float-right">
                                <OverlayTrigger trigger="hover" placement="top" overlay={<Tooltip>Category.</Tooltip>}>
                                    <Badge variant="success">Healthcare</Badge>
                                </OverlayTrigger>
                            </div>
                            <div className="mt-4" style={{ height: '150px' }}>
                                <Image style={{ height: '150px', width: '150px', backgroundColor: 'black' }} rounded />
                            </div>
                            <h5 className="card-title pricing-card-title text-success mt-2">₹399</h5>
                        </div>
                        <div className="card-footer">
                            <h5 className="my-0 font-weight-normal">Product 3</h5>
                        </div>
                    </div>
                </div>

                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                            <div className="row float-right">
                                <OverlayTrigger trigger="hover" placement="top" overlay={<Tooltip>Category.</Tooltip>}>
                                    <Badge variant="danger">Electronics</Badge>
                                </OverlayTrigger>
                            </div>
                            <div className="mt-4" style={{ height: '150px' }}>
                                <Image style={{ height: '150px', width: '150px', backgroundColor: 'black' }} rounded />
                            </div>
                            <h5 className="card-title pricing-card-title text-success mt-2">₹399</h5>
                        </div>
                        <div className="card-footer">
                            <h5 className="my-0 font-weight-normal">Product 1</h5>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                            <div className="row float-right">
                                <OverlayTrigger trigger="hover" placement="top" overlay={<Tooltip>Category.</Tooltip>}>
                                    <Badge variant="warning">Fashion</Badge>
                                </OverlayTrigger>
                            </div>
                            <div className="mt-4" style={{ height: '150px' }}>
                                <Image style={{ height: '150px', width: '150px', backgroundColor: 'black' }} rounded />
                            </div>
                            <h5 className="card-title pricing-card-title text-success mt-2"><s className="text-danger mr-2">₹699</s>₹399</h5>
                        </div>
                        <div className="card-footer">
                            <h5 className="my-0 font-weight-normal">Product 2</h5>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                            <div className="row float-right">
                                <OverlayTrigger trigger="hover" placement="top" overlay={<Tooltip>Category.</Tooltip>}>
                                    <Badge variant="success">Healthcare</Badge>
                                </OverlayTrigger>
                            </div>
                            <div className="mt-4" style={{ height: '150px' }}>
                                <Image style={{ height: '150px', width: '150px', backgroundColor: 'black' }} rounded />
                            </div>
                            <h5 className="card-title pricing-card-title text-success mt-2">₹399</h5>
                        </div>
                        <div className="card-footer">
                            <h5 className="my-0 font-weight-normal">Product 3</h5>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Home;