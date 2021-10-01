import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateStock from './components/AddStock';
import EditStock from './components/EditStock';
import Home from './components/Home';
import NavBar from './components/NavBar';
import StockDetails from './components/StockDetails';
import './style.css';
import GenerateReport from './components/genrep';
import AddItem from './components/charith/AddItem';
import ItemDetails from './components/charith/ItemDetails';
import cHome from './components/charith/itemHome';

import EditItem from './components/charith/EditItem';
import './style/cstyle.css';
import AddCategory from './components/charith/AddCategory';
import AllCategory from './components/charith/AllCategory';
import EditCategory from './components/charith/EditCategory';
import CategoryDetails from './components/charith/CategoryDetails';
import cGenarateReport from './components/charith/itemgenrep';
import itemNavBar from './components/charith/itemnavba';


class App extends Component {
  render() {
    return (
      <div className="bg">
      <BrowserRouter>
      <div className="container">
      <itemNavBar/>
       <NavBar/>
      
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreateStock}></Route>
        <Route path="/edit/:id" component={EditStock}></Route>
        <Route path="/stock/:id" component={StockDetails}></Route>
        <Route path="/genrep" component={GenerateReport}></Route>

        
        <Route path="/item" exact component={cHome}></Route>
        <Route path="/item/add_item" exact component={AddItem}></Route>
        <Route path="/item/edit/:id" exact component={EditItem}></Route>
        <Route path="/item/post/:id" exact component={ItemDetails}></Route>
        <Route path= "/item/add_category" exact component={AddCategory}></Route>
        <Route path= "/item/categories" exact component={AllCategory}></Route>
        <Route path= "/item/category/update/:id" exact component={EditCategory}></Route>
        <Route path="/item/specific/:id" exact component={CategoryDetails}></Route>
        <Route path= "/item/genrep" exact component={cGenarateReport}></Route>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
