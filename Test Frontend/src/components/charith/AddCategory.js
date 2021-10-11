import React, { Component } from 'react'
import axios from 'axios'

class AddCategory extends Component {

    constructor(props){
        super(props);
        this.state={
            CategoryName:"",
            Description:""
            
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

        const {CategoryName,Description} = this.state;

        const data ={

            CategoryName:CategoryName,
            Description: Description
            
            
        };

        console.log(data)

        axios.post("http://localhost:8000/category/save",data).then((res)=>{
            if(res.data.success){
                alert("category Added successfully")
               window.location.replace("/item/categories")
            }
        })  
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
            <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">Add New Category</h2>
            <div className="additm">
            <form onSubmit={this.onSubmit}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Category Name </label>
                <input type="text" 
                className="form-control"
                name="CategoryName"
                placeholder=""
                value={this.state.CategoryName}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Description </label>
                <input type="text" 
                className="form-control"
                name="Description"
                placeholder=""
                value={this.state.Description}
                onChange={this.handleInputChange} />
            </div>

            <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} >
            <i className="far fa-check-square"></i>
            &nbsp; Save
            </button>
            </form>
            </div>
            </div>
            </div>
           
        );
    }
}

export default AddCategory;

