import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer className="p-2 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        {/* <img className="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" /> */}
                        <small className="d-block mb-3 text-muted">Jenil Calcuttawala, 2019</small>
                    </div>
                    <div className="col-6 col-md text-right">

                        <h5><Link to="/about" className="p-2 text-dark">About</Link></h5>

                        {/* <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#c">Team</a></li>
                        </ul> */}
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;