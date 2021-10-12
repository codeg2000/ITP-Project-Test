import React, { Component } from 'react'
import axios from 'axios'
import { Form,Button,Col,Row,InputGroup } from "react-bootstrap";

class AddStock extends Component {

    constructor(props){
        super(props);
        this.state={
            Stock_ID :"",
            Stock_Name :"",
            Stock_Quantity :"",
            Supplier_Name :"",
            Supplier_Email :"",
            Supplier_ContactNo :"",
          validated:false
        
        };
    }

    handleInputChange= (e)=>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

   

    onSubmit = (e) =>{

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        }
        else{
    

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
    
            axios.post(`http://localhost:8000/stock/add`,data).then((res) =>{
                if(res.data.success){
                    alert("Stock added Successfully")
                    window.location.replace("/stocks")
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
    this.setState({ validated: true })
    }


    render() {
        return (
            <div className="container1">
                <div class="topnav">   
                <a class="active" href="/">Home</a>
                    <a href="/stocks">Dashboard</a>
                    <a href="/stocks/add">Add New Stock</a>
                </div>
            <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">Add New Stock</h2>
            <div className="Addui">
            <Form noValidate validated={this.state.validated} onSubmit={this.onSubmit}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Stock ID </label>
                <input type="text" 
                className="form-control"
                name="Stock_ID"
                placeholder="Enter Stock_ID"
                required
                value={this.state.Stock_ID}
                onChange={this.handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
Please Enter Stock IDs
</Form.Control.Feedback> 
              
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Stock Name </label>
                <input type="text" 
                className="form-control"
                name="Stock_Name"
                required
                placeholder="Enter Stock_Name"
                value={this.state.Stock_Name}
                onChange={this.handleInputChange} />
                <Form.Control.Feedback type="invalid">
Please Enter Stock Name
</Form.Control.Feedback> 
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Stock Quantity </label>
                <input type="text" 
                className="form-control"
                name="Stock_Quantity"
                required
                placeholder="Enter Stock_Quantity"
                value={this.state.Stock_Quantity}
                onChange={this.handleInputChange} />
                <Form.Control.Feedback type="invalid">
Please Enter Stock Quantity
</Form.Control.Feedback> 
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Supplier Name </label>
                <input type="text" 
                className="form-control"
                required
                name="Supplier_Name"
                placeholder="Enter Supplier_Name"
                value={this.state.Supplier_Name}
                onChange={this.handleInputChange} />
                <Form.Control.Feedback type="invalid">
Please Enter Supplier Name
</Form.Control.Feedback> 
            </div>
            
            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Supplier Email </label>
                <input type="text" 
                className="form-control"
                required
                name="Supplier_Email"
                placeholder="Enter Supplier_Email"
                value={this.state.Supplier_Email}
                onChange={this.handleInputChange} 
                />
                <Form.Control.Feedback type="invalid">
Please Enter Supplier Email
</Form.Control.Feedback> 
                
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Supplier ContactNo </label>
                <input type="text" 
                className="form-control"
                name="Supplier_ContactNo"
                required
                placeholder="Enter Supplier_ContactNo"
                value={this.state.Supplier_ContactNo}
                onChange={this.handleInputChange} 
                />
                <Form.Control.Feedback type="invalid">
Please Enter Supplier Contact No
</Form.Control.Feedback> 
               
            </div>

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                &nbsp; Save
            </button>
            </Form>
            </div>
            </div>
            </div>
        );
    }
}

export default AddStock;