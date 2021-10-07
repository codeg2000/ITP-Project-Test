import React, {Component} from 'react'
import axios from 'axios';

class EditStock extends Component {

    constructor(props){
        super(props);
        this.state={
            Stock_ID :"",
            Stock_Name :"",
            Stock_Quantity :"",
            Supplier_Name :"",
            Supplier_Email :"",
            Supplier_ContactNo :""
            

        }
    }

    handleInputChange= (e)=>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e)=>{
        
        e.preventDefault();

        const id = this.props.match.params.id;

        const {Stock_ID,Stock_Name,Stock_Quantity,Supplier_Name,Supplier_Email,Supplier_ContactNo} = this.state;

        const data ={

            Stock_ID:Stock_ID,
            Stock_Name:Stock_Name,
            Stock_Quantity:Stock_Quantity,
            Supplier_Name:Supplier_Name,
            Supplier_Email:Supplier_Email,
            Supplier_ContactNo:Supplier_ContactNo
            
        };

        console.log(data)

        axios.put(`http://localhost:8000/stock/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Stock Updated successfully")
                this.setState(
                    {
                        Stock_ID :"",
                        Stock_Name :"",
                        Stock_Quantity :"",
                        Supplier_Name :"",
                        Supplier_Email :"",
                        Supplier_ContactNo :""
                        
                    }
                )
            }
        })  
    }


    componentDidMount(){
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/stock/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    Stock_ID:res.data.stock.Stock_ID,
                    Stock_Name:res.data.stock.StockName,
                    Stock_Quantity:res.data.stock.Stock_Quantity,
                    Supplier_Name:res.data.stock.Supplier_Name,
                    Supplier_Email:res.data.stock.Supplier_Email,
                    Supplier_ContactNo:res.data.stock.Supplier_ContactNo

                });
    
                console.log(this.state.stock);
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
            <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">Edit Stock</h2>
            <div className="Addui">
            <form onSubmit={this.onSubmit}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Stock ID </label>
                <input type="text" 
                className="form-control"
                name="Stock_ID"
                placeholder="Enter Stock_ID"
                value={this.state.Stock_ID}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Stock Name </label>
                <input type="text" 
                className="form-control"
                name="Stock_Name"
                placeholder="Enter Stock_Name"
                value={this.state.Stock_Name}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Stock Quantity </label>
                <input type="text" 
                className="form-control"
                name="Stock_Quantity"
                placeholder="Enter Stock_Quantity"
                value={this.state.Stock_Quantity}
                onChange={this.handleInputChange} />
            </div>

<div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Supplier Name </label>
                <input type="text" 
                className="form-control"
                name="Supplier_Name"
                placeholder="Enter Supplier_Name"
                value={this.state.Supplier_Name}
                onChange={this.handleInputChange} />
            </div>
            
            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Supplier Email </label>
                <input type="text" 
                className="form-control"
                name="Supplier_Email"
                placeholder="Enter Supplier Email"
                value={this.state.Supplier_Email}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Supplier ContactNo </label>
                <input type="text" 
                className="form-control"
                name="Supplier_ContactNo"
                placeholder="Enter Supplier_ContactNo"
                value={this.state.Supplier_ContactNo}
                onChange={this.handleInputChange} />
            </div>

            <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} >
            <i className="far fa-check-square"></i>
            &nbsp; Update
            </button>
            </form>
            </div>
            </div>
            </div>
        );
    }
}

export default EditStock;