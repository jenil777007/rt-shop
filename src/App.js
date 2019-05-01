import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from './shared/navbar/Navbar';
import Home from './home/Home';
import Footer from './shared/footer/Footer';
import Sidebar from './shared/sidebar/Sidebar';

function App() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div>
            <Navbar />

            <Container>
              <Home />
            </Container>

            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default App;
