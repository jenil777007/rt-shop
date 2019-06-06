import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faExclamation, faCartPlus, faStar, faFileInvoice, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import './App.css';

import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner';
import Navbar from './shared/navbar/Navbar';
import Home from './home/Home';
import Footer from './shared/footer/Footer';
import Sidebar from './shared/sidebar/Sidebar';
import Product from './product/Product';
import Cart from './cart/Cart';

import * as firebase from 'firebase';

import ShopContext from './context/Context';

// Make a central library for font-awesome icons used across app
library.add(faShoppingCart, faExclamation, faCartPlus, faStar, faFileInvoice, faMinusCircle);

class App extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    const dbRef = firebase.database();
    const db = dbRef.ref();
    db.once('value', snap => {
      this.setState({
        products: snap.val(),
        isLoaded: true
      });
      console.log(this.state);
    });
  }

  setIsLoaded = (boolean) => {
    console.log('setting is loaded');
    this.setState({
      isLoaded: boolean
    });
    console.log('setted isloaded', this.state);
  };

  filterProductsByCategory = (category) => {
    if (category === 'All') {
      this.componentDidMount();
    } else {
      console.log('filtering by category ', category);
      let filteredProducts = this.state.products.filter((o) => {
        return o.category === category;
      });
      console.log('filtered products ', filteredProducts);
      this.setState({
        products: filteredProducts
      });
    }

  };

  addProductToCart = (product) => {
    console.log('adding product', product);
    this.setState({
      cart: [...this.state.cart, product]
    });
    console.log('added state', this.state);
    console.log('size', this.state.cart.length);
  };

  removeProductFromCart = (productName) => {
    console.log('removing product', productName);
    this.state.cart.splice(this.state.cart.findIndex(o => o.name === productName), 1);
    console.log('after removing state', this.state.cart);
    this.setState({
      cart: this.state.cart
    });
    console.log('after setting state', this.state.cart);
  };

  render() {
    return (

      <React.Fragment>
        <ShopContext.Provider
          value={{
            products: this.state.products,
            cart: this.state.cart,
            setIsLoaded: this.setIsLoaded,
            filterProductsByCategory: this.filterProductsByCategory,
            addProductToCart: this.addProductToCart,
            removeProductFromCart: this.removeProductFromCart,
          }}
        >
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

                  {!this.state.isLoaded
                    && <Spinner animation="border" className="App-spinner" />
                  }

                  <Footer />
                </div>
              </div>
            </div>
          </BrowserRouter>
        </ShopContext.Provider>
      </React.Fragment>

    );
  }

}

export default App;
