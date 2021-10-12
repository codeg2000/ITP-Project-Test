import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import axios from 'axios';



class Report extends Component {

    constructor(props) {
        super(props);
        
        this.state={
          posts:[]
        };
      }
    
    
      componentDidMount(){
        this.retrievePosts();
      }
    
      retrievePosts(){
        axios.get("http://localhost:8000/employee").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPosts
            });
    
            console.log(this.state.posts)
          }
        });
      }

      
    render() {
        return (
            <div className="container1">
            
              <div class="topnav">
              <a class="active" href="/">Home</a>
                    <a  href="/emp">DashBoard</a>
                    <a  href="/emp/add">Add Employee</a>
                    <a href="/emp/leave/create">Create Leave</a>
                    <a href="/emp/leave">View Leaves</a>
                 </div>
              <br/>
           <h2>Do you want to get a report?</h2>
              <br/>
          <p className="text-center fs-4 fw-bolder font-family:verdana">Employee Report</p>
          <ReactToPrint
            trigger={() => (
            <button
            type="button"
            class="btn btn-danger"
            style={{ marginInlineStart: "85%" }}
            >
            <i class="fas fa-print mr-2"></i>Print this out!
            </button>
            )}
            content={() => this.componentRef}
          />

          <table id="Report" className="table table-success table-striped" style={{marginTop:'40px'}} ref={(Component) => (this.componentRef = Component)}>
            <thead>
              <tr >
                <th scope="col">#</th>  
                <th scope="col">Emp ID</th>  
                <th scope="col">First Name</th> 
                <th scope="col">Last Name</th> 
                <th scope="col">Age</th>
                <th scope="col">NIC No</th>
                <th scope="col">Gender</th>
                <th scope="col">DOB</th>
                <th scope="col">Permenent Address</th>
                <th scope="col">Contact No</th>
                <th scope="col">Job Title</th>
                <th scope="col">Joined Date</th>              
              </tr>  
            </thead>  

            <tbody>
              {this.state.posts.map((posts,index) =>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{posts.empid}</td>
                  <td>{posts.firstname}</td>
                  <td>{posts.lastname}</td>
                  <td>{posts.age}</td>
                  <td>{posts.nicNo}</td>
                  <td>{posts.gender}</td>
                  <td>{posts.dob}</td>
                  <td>{posts.address}</td>
                  <td>{posts.contactNo}</td>
                  <td>{posts.jobTitle}</td>
                  <td>{posts.joinedDate}</td>
                
                </tr>
              ))}

            </tbody>

          </table>
        
      </div>
    );
  }
}

export default Report;
