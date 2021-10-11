import React, { Component } from 'react';
import axios from 'axios';

class CategoryDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        }
    }
componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/category/specific/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                post:res.data.post
            });

            console.log(this.state.post);
        }
    });
}

    render() {
        const{CategoryName,Description,} = this.state.post;

        return (
            <div className="container1">
                <div class="topnav">
                <a class="active" href="/">Home</a>
                    <a  href="/item">Dashboard</a>
                    <a href="/item/add_item">Add Item</a>
                    <a href="/item/categories">Categories</a>
                    <a href="/item/add_category">Add Category</a>
                </div>
            <div style={{marginTop:'20px'}}>
            <h4>{CategoryName}</h4>  
            <hr/>  

        <dl class="row">
            <dt class="col-sm-3">Category name</dt>
            <dd class="col-sm-9">{CategoryName}</dd>

            <dt class="col-sm-3">Description</dt>
            <dd class="col-sm-9">{Description}
            </dd>

         </dl>
    

            </div>
            </div>
        );
    }
}

export default CategoryDetails;
