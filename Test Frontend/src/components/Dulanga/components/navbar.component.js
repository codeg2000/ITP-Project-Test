import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      // <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      //   <Link to="/" className="navbar-brand">Sales Management</Link>
      //   <div className="collpase navbar-collapse">
      //     <ul className="navbar-nav mr-auto">
      //       <li className="navbar-item">
      //         <Link to="/" className="nav-link">Sales</Link>
      //       </li>
      //       <li className="navbar-item">
      //         <Link to="/create" className="nav-link">Create a Sale</Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark col-12">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/sales/Saleslist" className="nav-link">Sales Management</Link>
            </li>
            <li class="nav-item">
              <Link to="/sales/Saleslist" className="nav-link">Sales</Link>
            </li>
            <li class="nav-item">
              <Link to="/sales/create" className="nav-link">Create a Sale</Link>
            </li>
            <li class="nav-item">
              <Link to="/sales/chart" className="nav-link">Sale Chart</Link>
            </li>
            {/* <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}