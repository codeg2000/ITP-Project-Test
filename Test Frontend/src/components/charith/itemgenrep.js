import React, { Component } from 'react';
import axios from 'axios'; 
import ReactToPrint from "react-to-print";
import cNavBar from './itemNavBar';

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



  render() {
    return (
      <div>
        <cNavBar/>

      <div className="container1">
          <br/>
          <h2>Do you want to get a report? </h2>
          <br/>
        <br/>
        <h2 className="topic">All Items </h2>
        <br/>
        <ReactToPrint
    trigger={() => (
    <button
        type="button"
        class="btn btn-danger"
        
        style={{ marginInlineStart: "85%" }}
        >
        <  i class="fas fa-print mr-2"></i>Print this out!
        </button>
    )}
        content={() => this.componentRef}
    />
    <br/>
    <br/>
        <table className="table table-success table-striped" ref={(Component) => (this.componentRef = Component)}> 
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Category</th>
              <th scope="col">Quality Assurance</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Unit Profit</th>
              
            </tr>
          </thead>
          <tbody> 
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.ItemName}
                    </a>
                    
                    </td>
                <td>{posts.BrandName}</td>
                <td>{posts.Category}</td>
                <td>{posts.QualityAssurance}</td>
                <td>{posts.UnitPrice}</td>
                <td>{posts.UnitProfit}</td>
                
              </tr>
            ))}
  
          </tbody>
        </table>
      
        
        
       
      </div>
      </div>
    );
  }
}


export default Home;
