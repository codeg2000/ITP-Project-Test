import React, { Component } from 'react';

class  itemNavBar extends Component {
    render() {
        return (
          <div class="topnav">
             <a class="active" href="/">Home</a>
          <a  href="/item">Dashboard</a>
          <a href="/item/add_item">Add Item</a>
          <a href="/item/categories">Categories</a>
          <a href="/item/add_category">Add Category</a>
        </div>
        );
    }
}

export default itemNavBar;