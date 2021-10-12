import React, { Component } from 'react';
import axios from 'axios'; 

class Home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };

}


componentDidMount(){
  this.retrieveItems();
}


retrieveItems(){
  axios.get("http://localhost:8000/item").then(res => {
    if(res.data.success){
      this.setState({
        posts:res.data.existingItems
      });

      console.log(this.state.posts)
    }

  });

}

onDelete = (id) =>{
  // eslint-disable-next-line no-restricted-globals
  if(confirm("Are you Sure you want to delete this item?")){
  axios.delete(`http://localhost:8000/item/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrieveItems();
  })
  }
}


filterData(posts,searchKey){

  const result = posts.filter((post) =>
  post.ItemName.toLowerCase().includes(searchKey)||
  post.ItemName.toUpperCase().includes(searchKey)||
  post.BrandName.toLowerCase().includes(searchKey)||
  post.BrandName.toUpperCase().includes(searchKey)
  
  )

  this.setState({posts:result})

}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/item").then(res =>{
    if(res.data.success){
     
        this.filterData(res.data.existingItems,searchKey)
    }

  });

}



  render() {
    return (
      <div className="container1">
        <div class="topnav">
        <a class="active" href="/">Home</a>
                    <a  href="/item">Dashboard</a>
                    <a href="/item/add_item">Add Item</a>
                    <a href="/item/categories">Categories</a>
                    <a href="/item/add_category">Add Category</a>
                </div>
        <div className= "search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input></div>
        <br/>
        <h2 className="topic">All Items </h2>
        <br/>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Item_ID</th>
              <th scope="col">Item Name</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Category</th>
              <th scope="col">Quality Assurance</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Unit Profit</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody> 
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">I_00{index+1}</th>
                <td>
                    <a href={`/item/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.ItemName}
                    </a>
                    
                    </td>
                <td>{posts.BrandName}</td>
                <td>{posts.Category}</td>
                <td>{posts.QualityAssurance}</td>
                <td>{posts.UnitPrice}</td>
                <td>{posts.UnitProfit}</td>
                <td>
                  <a className="btn btn-warning" href={`/item/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a> 
                  &nbsp; 
                  <a className="btn btn-danger" href="#" onClick= {()=>this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a> 
                </td>
              </tr>
            ))}
  
          </tbody>
        </table>
      
        <button type="button" class="btn btn-primary"> <a href="/item/genrep" style={{textDecoration: "none", color:"white"}}> Generate Report</a></button>
        
       
      </div>
    );
  }
}


export default Home;
