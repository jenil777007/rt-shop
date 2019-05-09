import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faExclamation, faCartPlus, faStar, faFileInvoice, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container'
import Navbar from './shared/navbar/Navbar';
import Home from './home/Home';
import Footer from './shared/footer/Footer';
import Sidebar from './shared/sidebar/Sidebar';
import Product from './product/Product';
import Cart from './cart/Cart';

// Make a central library for font-awesome icons used across app
library.add(faShoppingCart, faExclamation, faCartPlus, faStar, faFileInvoice, faMinusCircle);

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <div>
              <Navbar />

              <Container>
                <Route exact path="/home" component={Home} />
                <Route exact path="/product/:id" component={Product} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/" component={Home} />
              </Container>

              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
