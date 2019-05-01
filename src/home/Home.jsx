import React, { Component } from 'react';

import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Badge from 'react-bootstrap/Badge';

class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

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