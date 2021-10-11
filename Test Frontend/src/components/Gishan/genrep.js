import React, { Component } from 'react';
import axios from 'axios';
import ReactToPrint from 'react-to-print';

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
 
  render() {
    return (
      <div className="container1">
         <div class="topnav">    
         <a class="active" href="/">Home</a>    
                    <a href="/stocks">Dashboard</a>
                    <a href="/stocks/add">Add New Stock</a>
        </div>
        <h2>Do you want to get a Report?</h2>
        <h2><center>All Stock Details</center></h2>
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
              <th scope="col">Stock_ID</th>
              <th scope="col">Stock_Name</th>
              <th scope="col">Stock_Quantity</th>
              <th scope="col">Supplier_Name</th>
              <th scope="col">Supplier_Email</th>
              <th scope="col">Supplier_ContactNo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stocks.map((stocks,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/stock/${stocks._id}`} style={{textDecoration:'none'}}>
                    {stocks.Stock_ID}
                    </a>
                </td>
                <td>{stocks.Stock_Name}</td>
                <td>{stocks.Stock_Quantity}</td>
                <td>{stocks.Supplier_Name}</td>
                <td>{stocks.Supplier_Email}</td>
                <td>{stocks.Supplier_ContactNo}</td>
              </tr>
            ))}
          </tbody>

        </table>        
      </div>
    );
  }
}


export default Home;
