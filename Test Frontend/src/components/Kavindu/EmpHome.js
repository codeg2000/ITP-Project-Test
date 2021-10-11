import React, { Component } from 'react';
import axios from 'axios';



class EmpHome extends Component {
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

  onDelete=(id)=>{

    axios.delete(`http://localhost:8000/employee/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrievePosts();
    })
  }

  filterData(posts,searchKey){

    const result = posts.filter((post) =>
    post.firstname.toLowerCase().includes(searchKey)||
    post.nicNo.includes(searchKey)
    
    )
  
    this.setState({posts:result})
  
  }
  handleSearchArea = (e) =>{

    const searchKey = e.currentTarget.value;
  
    axios.get("http://localhost:8000/employee").then(res =>{
      if(res.data.success){
       
          this.filterData(res.data.existingPosts,searchKey)
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
             <div className="ss">
             <input class="form-control" 
             type="search" 
             placeholder="Search"  
             aria-label="Search"
             onChange={this.handleSearchArea} />
             </div> 
          <p className="text-center fs-4 fw-bolder font-family:verdana">All Employee Details</p>

          <table  className="table table-success table-striped" style={{marginTop:'40px'}}>
            <thead>
              <tr >
                <th scope="col">#</th>   
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
                <th scope="col">Action</th>               
              </tr>  
            </thead>  

            <tbody>
              {this.state.posts.map((posts,index) =>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  
                  <td>
                      <a href={`/emp/post/${posts._id}`} style={{textDecoration:"none"}}>
                      {posts.firstname}
                      </a>
                  </td>
                  <td>{posts.lastname}</td>
                  <td>{posts.age}</td>
                  <td>{posts.nicNo}</td>
                  <td>{posts.gender}</td>
                  <td>{posts.dob}</td>
                  <td>{posts.address}</td>
                  <td>{posts.contactNo}</td>
                  <td>{posts.jobTitle}</td>
                  <td>{posts.joinedDate}</td>
                  
                  <td>
                  <a className="btn btn-warning" href={`/emp/edit/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp; 
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                      <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a> 
                  </td>

                </tr>
              ))}

            </tbody>

          </table>
          <a href="/emp/report">
        <button type="button" className="btn btn-primary" >Generate Report</button>
        </a>
      </div>
    );
  }
}

export default EmpHome;


