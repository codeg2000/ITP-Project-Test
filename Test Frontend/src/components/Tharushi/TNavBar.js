import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div class="topnav">
              <a class="active" href="/">Home</a>
            <a  href="/return">DashBoard</a>
            <a  href="/return/add">Create New Post</a>
            <a  href="/return/Report">Genarate Report</a>
            
          </div>
        );
    }
}

export default NavBar;
