import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div class="topnav">
              <a class="active" href="/">Home</a>
            <a  href="/department/home">DashBoard</a>
            <a  href="/department/add_department">Add Department</a>
            <a href="/department/all_department">Department Details</a>
            <a href="/department/manage-access">IT MANAGER</a>
          </div>
        );
    }
}

export default NavBar;
