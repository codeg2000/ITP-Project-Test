import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './TNavBar'

export default class Home extends Component {
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
  axios.get("http://localhost:8000/posts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts)
    }
  });
}

onDelete = (id) =>{
    axios.delete(`http://localhost:8000/post/delete/${id}`).then((res) =>{
        alert("Delete Succesfully");
        this.retrievePosts();
        window.location.replace("/return")
    })
}

filterData(posts,searchkey){

    const result = posts.filter((post) =>
    post.Return_ID.toLowerCase().includes(searchkey)||
    post.Return_Date.toLowerCase().includes(searchkey)||
    post.Return_ItemName.toLowerCase().includes(searchkey)||
    post.Customer_Name.toLowerCase().includes(searchkey)||
    post.Customer_ContactNo.toLowerCase().includes(searchkey)||
    post.Return_Reason.toLowerCase().includes(searchkey)
    )

    this.setState({posts:result})
}

handleSearchArea = (e) =>{

    const searchkey= e.currentTarget.value;

    axios.get("http://localhost:8000/posts").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingPosts,searchkey)
    }
  });
}
  render() {
    return (
      <div>
      <NavBar/>
      <div className="container"  style={{minHeight:"700px"}}>
          
        <br></br>
        <div className="raw">
            <div >
            <center><h2>All Return Details</h2></center>
            </div>
            <div className="col-lg-3 mt-2-mb-2">
                <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                onChange={this.handleSearchArea}>


            </input>
            </div>
        </div>
        <table className="table table-success table-striped" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Return_ID</th>
              <th scope="col">Return_Date</th>
              <th scope="col">Return_ItemName</th>
              <th scope="col">Customer_Name</th>
              <th scope="col">Customer_ContactNo</th>
              <th scope="col">Return_Reason</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="raw">{index+1}</th>
                <td>
                    <a href={`/return/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.Return_ID}
                    </a>
                    </td>
        
                <td>{posts.Return_Date}</td>
                <td>{posts.Return_ItemName}</td>
                <td>{posts.Customer_Name}</td>
                <td>{posts.Customer_ContactNo}</td>
                <td>{posts.Return_Reason}</td>
                <td>
                  <a className="btn btn-warning" href={`/return/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>


                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success"><a href="/return/add" style={{textDecoration:'none',color:'white'}}>Create New Post</a></button>
        
      </div>
      </div>
    )
  }
}