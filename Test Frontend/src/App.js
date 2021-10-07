import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import CreateStock from './components/Gishan/AddStock';
import EditStock from './components/Gishan/EditStock';
import GHome from './components/Gishan/Home';
import StockDetails from './components/Gishan/StockDetails';
import GenerateReport from './components/Gishan/genrep';
import AddItem from './components/charith/AddItem';
import ItemDetails from './components/charith/ItemDetails';
import cHome from './components/charith/itemHome';
import './style/Gstyle.css';

import EditItem from './components/charith/EditItem';
import AddCategory from './components/charith/AddCategory';
import AllCategory from './components/charith/AllCategory';
import EditCategory from './components/charith/EditCategory';
import CategoryDetails from './components/charith/CategoryDetails';
import cGenarateReport from './components/charith/itemgenrep';
import './style/cstyle.css';

import CreateEmployee from './components/Kavindu/CreateEmployee';
import EditEmployee from './components/Kavindu/EditEmployee';
import EmployeeDetails from './components/Kavindu/EmployeeDetails';
import EmpHome from './components/Kavindu/EmpHome';
import AllLeaves from './components/Kavindu/AllLeaves';
import CreateLeave from './components/Kavindu/CreateLeave';
import LeaveDetails from './components/Kavindu/LeaveDetails';
import EditLeave from './components/Kavindu/EditLeave';
import Report from './components/Kavindu/Report';
import Supermarket from './components/Kavindu/SuperMarket';
import './style/styles.css';



class App extends Component {
  render() {
    return (
      <div className="bg">
      <BrowserRouter>

      <Route path="/" exact component={Supermarket}></Route>

      <div className="container">
        <Route path="/stocks" exact component={GHome}></Route>
        <Route path="/stocks/add" component={CreateStock}></Route>
        <Route path="/stocks/edit/:id" component={EditStock}></Route>
        <Route path="/stocks/stock/:id" component={StockDetails}></Route>
        <Route path="/stocks/genrep" component={GenerateReport}></Route>

        <Route path="/item" exact component={cHome}></Route>
        <Route path="/item/add_item" exact component={AddItem}></Route>
        <Route path="/item/edit/:id" exact component={EditItem}></Route>
        <Route path="/item/post/:id" exact component={ItemDetails}></Route>
        <Route path= "/item/add_category" exact component={AddCategory}></Route>
        <Route path= "/item/categories" exact component={AllCategory}></Route>
        <Route path= "/item/category/update/:id" exact component={EditCategory}></Route>
        <Route path="/item/specific/:id" exact component={CategoryDetails}></Route>
        <Route path= "/item/genrep" exact component={cGenarateReport}></Route>

        <Route path="/emp" exact component={EmpHome}></Route>
        <Route path="/emp/add" exact component={CreateEmployee}></Route>
        <Route path="/emp/edit/:id" exact component={EditEmployee}></Route>
        <Route path="/emp/post/:id" exact component={EmployeeDetails}></Route>
        <Route path="/emp/report" exact component={Report}></Route>
        <Route path="/emp/leave" exact component={AllLeaves}></Route>
        <Route path="/emp/leave/create" exact component={CreateLeave}></Route>
        <Route path="/emp/leave/edit/:id" exact component={EditLeave}></Route>
        <Route path="/emp/leave/post/:id" exact component={LeaveDetails}></Route>

      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
