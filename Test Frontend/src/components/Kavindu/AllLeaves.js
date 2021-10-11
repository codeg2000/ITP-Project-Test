import React, { Component } from 'react';
import axios from 'axios';


class AllLeaves extends Component {

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
        axios.get("http://localhost:8000/post").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPosts
            });
    
            console.log(this.state.posts)
          }
        });
      }

      
  onDelete=(id)=>{

    axios.delete(`http://localhost:8000/post/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrievePosts();
    })
  }

  filterData(posts,searchKey){

    const result = posts.filter((post) =>
    post.nicNo.toLowerCase().includes(searchKey)
    
    )
  
    this.setState({posts:result})
  
  }
  handleSearchArea = (e) =>{

    const searchKey = e.currentTarget.value;
  
    axios.get("http://localhost:8000/post").then(res =>{
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
              <input class="form-control me"
               type="search" 
               placeholder="Search" 
               aria-label="Search" 
               onChange={this.handleSearchArea}/>
               </div> 
            <p className="text-center fs-4 fw-bolder font-family:verdana">All Employees' Leave Details</p>
  
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>   
                  <th scope="col">NIC No</th> 
                  <th scope="col">From Date</th> 
                  <th scope="col">To Date</th>
                  <th scope="col">Leave Type</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>               
                </tr>  
              </thead>  
  
              <tbody>
                {this.state.posts.map((posts,index) =>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
  
                    <td>
                        <a href={`/emp/leave/post/${posts._id}`} style={{textDecoration:"none"}}>
                        {posts.nicNo}
                        </a>
                    </td>
                    <td>{posts.fromDate}</td>
                    <td>{posts.toDate}</td>
                    <td>{posts.typeOfLeave}</td>
                    <td>{posts.description}</td>
                    <td>
                    <a className="btn btn-warning" href={`/emp/leave/edit/${posts._id}`}>
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
            
        </div>
        );
    }
}

export default AllLeaves;
