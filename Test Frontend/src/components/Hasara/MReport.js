import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import axios from 'axios';

class Report extends Component {

  constructor(props){
    super(props);
  
    this.state={
      posts:[]
    };
  }
  
  componentDidMount(){
    this.retrievePosts();
  }
  
  retrievePosts(){
    axios.get("http://localhost:8000/member").then(res=>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
  
        console.log(this.state.posts);
      }
    });
  }
  
    render(){
      return (
        <div className="containerx">
         <div class="topnav">
  
                    <a class="active" href="/">Home</a>
                    <a href="/member">DashBoard</a>
                    <a  href="/member/add">Add Member</a>
                    
                    </div>
                    
                    <h2>Do you want to get a report?</h2>

                  <br/>

                  <p className="text-center fs-4 fw-bolder font-family:verdana">MEMBERSHIP REPORT</p>
                  <ReactToPrint
                  trigger={() => (
                  <button
                  type="button"
                  class="btn btn-danger"
                  style={{ marginInlineStart: "85%" }}>

                  <i class="fas fa-print mr-2"></i>Print this out!

                  </button>
                  )}

                  content={() => this.componentRef}
                  />
  
          <table  className="table table-success table-striped" style={{marginTop:'40px'}}  ref={(Component) => (this.componentRef = Component)}>
           
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Member ID</th>
               <th scope="col">Member Name</th>
               <th scope="col">E-mail</th>
               <th scope="col">Address</th>
               <th scope="col">Phone</th>
               <th scope="col">Membership Type</th>
            </tr>
            </thead>
  
          <tbody>
              {this.state.posts.map((posts,index)=>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{posts.memberid}</td>
                  <td>
                    <a href={`/member/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.name}</a>
  
                    </td>
                    
                    <td>{posts.email}</td>
                    <td>{posts.address}</td>
                    <td>{posts.phone}</td>
                    <td>{posts.mtype}</td>
                    <td>
                  </td>
                  </tr>
              ))}
  
          </tbody>
  
         </table>
         
       </div>
      );
    }
  }
  
 
export default Report;
