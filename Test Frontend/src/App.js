import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateStock from './components/AddStock';
import EditStock from './components/EditStock';
import Home from './components/Home';
import NavBar from './components/NavBar';
import StockDetails from './components/StockDetails';
import './style.css';
import GenerateReport from './components/genrep';

class App extends Component {
  render() {
    return (
      <div className="bg">
      <BrowserRouter>
      <div className="container">
        <NavBar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreateStock}></Route>
        <Route path="/edit/:id" component={EditStock}></Route>
        <Route path="/stock/:id" component={StockDetails}></Route>
        <Route path="/genrep" component={GenerateReport}></Route>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
