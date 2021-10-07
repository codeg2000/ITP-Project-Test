import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div class="topnav">
            <a class="active" href="/emp">DashBoard</a>
            <a  href="/emp/add">Add Employee</a>
            <a href="/emp/leave/create">Create Leave</a>
            <a href="/emp/leave">View Leaves</a>
          </div>
        );
    }
}

export default NavBar;
