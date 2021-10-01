import React, { Component } from 'react';

class  NavBar extends Component {
    render() {
        return (
          <div class="topnav">
          <a class="active" href="/">Stock Management</a>
          <a href="/">Dashboard</a>
          <a href="/add">Add New Stock</a>
        </div>
        );
    }
}

export default NavBar;

