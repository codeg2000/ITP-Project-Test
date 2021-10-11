import React, { Component } from 'react';
import axios from 'axios';


class ItemDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        }
    }
componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/item/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                post:res.data.post
            });

            console.log(this.state.post);
        }
    });
}

    render() {
        const{ItemName,BrandName,Category,QualityAssurance,UnitPrice,UnitProfit} = this.state.post;

        return (
            <div className="container1">
                <div class="topnav">
                <a class="active" href="/">Home</a>
                    <a  href="/item">Dashboard</a>
                    <a href="/item/add_item">Add Item</a>
                    <a href="/item/categories">Categories</a>
                    <a href="/item/add_category">Add Category</a>
                </div>
                <div className="ui2">
            <div style={{marginTop:'20px'}}>
            <h4>{ItemName}</h4>  
            <hr/>  

        <dl class="row">
            <dt class="col-sm-3">Item name</dt>
            <dd class="col-sm-9">{ItemName}</dd>

            <dt class="col-sm-3">Brand name</dt>
            <dd class="col-sm-9">
            <p>{BrandName}</p>
            </dd>

            <dt class="col-sm-3">Category</dt>
            <dd class="col-sm-9">{Category}</dd>

            <dt class="col-sm-3 text-truncate">unit price</dt>
            <dd class="col-sm-9">{UnitPrice}</dd>

            <dt class="col-sm-3 text-truncate">Quality Quality Assurance</dt>
            <dd class="col-sm-9">{QualityAssurance}</dd>
            
            <dt class="col-sm-3">Unit Profit</dt>
            <dd class="col-sm-9">{UnitProfit}</dd>
         </dl>
    

            </div>
            
            <a href="/item">

            <button type="button" class="btn btn-primary">

            <i class="fas fa-arrow-alt-circle-left"></i>    

            &nbsp; Dashboard

            </button>

            </a>


            </div>
            </div>
        );
    }
}

export default ItemDetails;
