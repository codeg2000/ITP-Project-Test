import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
constructor(props){
  super(props);

  this.state={
    stocks:[]
  };

}

componentDidMount(){
  this.retrieveStocks();
}

retrieveStocks(){
  axios.get("http://localhost:8000/stocks").then(res =>{
    if(res.data.success){
      this.setState({
        stocks:res.data.existingStocks
      });

      console.log(this.state.stocks)
    }

  });
}

onDelete = (id) =>{

  axios.delete(`http://localhost:8000/stock/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveStocks();
  })

}

filterData(stocks,searchKey){

  const result = stocks.filter((post) =>
  post.Stock_ID.toLowerCase().includes(searchKey)||
  post.Stock_Name.toLowerCase().includes(searchKey)||
  post.Stock_Quantity.toLowerCase().includes(searchKey)||
  post.Supplier_Name.toLowerCase().includes(searchKey)||
  post.Supplier_Email.toLowerCase().includes(searchKey)||
  post.Supplier_ContactNo.toLowerCase().includes(searchKey)
  )

  this.setState({stocks:result})

}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/stocks").then(res =>{
    if(res.data.success){
     
        this.filterData(res.data.existingStocks,searchKey)
    }

  });

}
 
  render() {
    return (
      <div className="container1">
        <div class="topnav">
                    <a href="/stocks">Dashboard</a>
                    <a href="/stocks/add">Add New Stock</a>
        </div>
        <div className="ss"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input></div>
        <h2><center>All Stock Details</center></h2>
        <table className="table table-success table-striped" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Stock_ID</th>
              <th scope="col">Stock_Name</th>
              <th scope="col">Stock_Quantity</th>
              <th scope="col">Supplier_Name</th>
              <th scope="col">Supplier_Email</th>
              <th scope="col">Supplier_ContactNo</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stocks.map((stocks,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/stocks/stock/${stocks._id}`} style={{textDecoration:'none'}}>
                    {stocks.Stock_ID}
                    </a>
                </td>
                <td>{stocks.Stock_Name}</td>
                <td>{stocks.Stock_Quantity}</td>
                <td>{stocks.Supplier_Name}</td>
                <td>{stocks.Supplier_Email}</td>
                <td>{stocks.Supplier_ContactNo}</td>
                <td>
                  <a className="btn btn-warning" href={`/stocks/edit/${stocks._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(stocks._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>

                </td>

              </tr>
            ))}
          </tbody>

        </table>        
        <button type="button" class="btn btn-primary"> <a href="/stocks/genrep" style={{textDecoration: "none", color:"white"}}>Generate Report</a></button>
      </div>
    );
  }
}


export default Home;
