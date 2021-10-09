import React, { Component } from 'react';
import axios from 'axios';
import ReactToPrint from 'react-to-print';

class Home extends Component {
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
 
  render() {
    return (
      <div className="container1">
          <h2>Do you want to get a Report?</h2>
        <h2><center>All Return Details</center></h2>
        <ReactToPrint
trigger={() => (
<button
type="button"
class="btn btn-danger"
style={{ marginInlineStart: "0%" }}
>
<i class="fas fa-print mr-2"></i>Print this out!
</button>
)}
content={() => this.componentRef}
/>
        <table className="table table-success table-striped" style={{marginTop:'40px'}} ref={(Component) => (this.componentRef = Component)}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Return_ID</th>
              <th scope="col">Return_Date</th>
              <th scope="col">Return_ItemName</th>
              <th scope="col">Customer_Name</th>
              <th scope="col">Customer_ContactNo</th>
              <th scope="col">Return_Reason</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/stock/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.Return_ID}
                    </a>
                </td>
                <td>{posts.Return_Date}</td>
                <td>{posts.Return_ItemName}</td>
                <td>{posts.Customer_Name}</td>
                <td>{posts.Customer_ContactNo}</td>
                <td>{posts.Return_Reason}</td>
              </tr>
            ))}
          </tbody>

        </table>        
      </div>
    );
  }
}


export default Home;