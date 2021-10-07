import React, { Component } from 'react';
import axios from 'axios';

class EditItem extends Component {

    constructor(props){
        super(props);
        this.state={
            ItemName:"",
            BrandName:"",
            Category:"",
            QualityAssurance:"",
            UnitPrice:"",
            UnitProfit:""
            

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

        const {ItemName,BrandName,Category,QualityAssurance,UnitPrice,UnitProfit} = this.state;

        const data ={

            ItemName:ItemName,
            BrandName: BrandName,
            Category: Category,
            QualityAssurance:QualityAssurance,
            UnitPrice:UnitPrice,
            UnitProfit:UnitProfit
            
        };

        console.log(data)

        axios.put(`http://localhost:8000/item/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Item Updated successfully")
                this.setState(
                    {
                        ItemName:"",
                        BrandName:"",
                        Category:"",
                        QualityAssurance:"",
                        UnitPrice:"",
                        UnitProfit:""
                        
                    }
                )
            }
        })  
    }


    componentDidMount(){
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/item/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    ItemName:res.data.post.ItemName,
                    BrandName:res.data.post.BrandName,
                    Category:res.data.post.Category,
                    QualityAssurance:res.data.post.QualityAssurance,
                    UnitPrice:res.data.post.UnitPrice,
                    UnitProfit:res.data.post.UnitProfit

                });
    
                console.log(this.state.post);
            }
        });
    }
    



    render() {
        return (
            <div className="container1">
                <div class="topnav">
                    <a class="active" href="/item">Dashboard</a>
                    <a href="/item/add_item">Add Item</a>
                    <a href="/item/categories">Categories</a>
                    <a href="/item/add_category">Add Category</a>
                </div>
            <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">Edit Item</h2>
            <div className="additm">
            <form onSubmit={this.onSubmit}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Item Name </label>
                <input type="text" 
                className="form-control"
                name="ItemName"
                placeholder=""
                value={this.state.ItemName}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Brand Name </label>
                <input type="text" 
                className="form-control"
                name="BrandName"
                placeholder=""
                value={this.state.BrandName}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Category </label>
                <input type="text" 
                className="form-control"
                name="Category"
                placeholder=""
                value={this.state.Category}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Quality Assurance </label>
                <input type="text" 
                className="form-control"
                name="QualityAssurance"
                placeholder=""
                value={this.state.QualityAssurance}
                onChange={this.handleInputChange} />
            </div>
            
            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Unit Price </label>
                <input type="text" 
                className="form-control"
                name="UnitPrice"
                placeholder=""
                value={this.state.UnitPrice}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Unit Profit </label>
                <input type="text" 
                className="form-control"
                name="UnitProfit"
                placeholder=""
                value={this.state.UnitProfit}
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

export default EditItem;
