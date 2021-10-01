import React, { Component } from 'react';
import axios from 'axios'; 
import cNavBar from './itemNavBar';


class AllCategory extends Component {
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
  axios.get("http://localhost:8000/category").then(res => {
    if(res.data.success){
      this.setState({
        posts:res.data.existingCategory
      
      });

      console.log(this.state.posts)
    }

  });

}

onDelete = (id) =>{
  axios.delete(`http://localhost:8000/category/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrieveItems();
  })
}

  render() {
    return (
      <div>
        <cNavBar/>
      <div className="container1">
        <div className= "search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input></div>
        <br/>
        <h2 className="topic"> Categories</h2>
        <br/>
        
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">CategoryName</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          <tbody> 
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/item/specific/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.CategoryName}
                    </a>
                    
                </td>

                <td>
                    
                    {posts.Description}
                    
                    
                </td>

                
                <td>
                  <a className="btn btn-warning" href={`/item/category/update/${posts._id}`}>
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
        
        <button type="button" class="btn btn-primary">Generate Report</button>
        
       
      </div>
      </div>
    );
  }
}

export default AllCategory;