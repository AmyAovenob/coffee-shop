import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Products from './Products';
import Store from './Store';
import Footer from './Footer'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col" style={{ padding: 0 }}>
                        <Switch>
                            <Route path='/' exact component={ Home } />
                            <Route path='/about' component={ About } />
                            <Route path='/products' component={ Products } />
                            <Route path='/store' component={ Store } />
                        </Switch>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
