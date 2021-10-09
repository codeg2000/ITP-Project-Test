import React, { Component } from 'react';



class  NavBar extends Component {

    render() {

        return (

          <div class="topnav">

          <a class="active" href="/">Return Management</a>

          <a href="/">Dashboard</a>

          <a href="/Report">Generate Report</a>

        </div>

        );

    }

}



export default NavBar;