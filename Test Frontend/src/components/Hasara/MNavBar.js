import React,{ Component } from 'react';

class NavBar extends Component{
  render(){
    return (
        <div class="topnav">
        <a class="active" href="/member">DashBoard</a>
        <a  href="/member/add">Add Member</a>
        <a href="/member/leave/create">Create Leave</a>
        <a href="/member/leave">View Leaves</a>
      </div>
    );
  }
}
export default NavBar;
