import React, { Component } from 'react';
import axios from 'axios';

class StockDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            stock:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/stock/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    stock:res.data.stock
                });

                console.log(this.state.stock);
            }

        });
    }

    render() {

        const {Stock_ID,Stock_Name,Stock_Quantity,Supplier_Name,Supplier_Email,Supplier_ContactNo} = this.state.stock;
        
        return (
            <div className="container1">
            <div className="background">
            <div style={{marginTop:'20px'}}>
            <h4>{'Stock Details'}</h4>
            <hr/>
            <dl class="row">
            <dt class="col-sm-3">Stock_ID</dt>
            <dd class="col-sm-9">{Stock_ID}</dd> 
               
            <dt class="col-sm-3">Stock_Name</dt>
            <dd class="col-sm-9">{Stock_Name}</dd>

            <dt class="col-sm-3">Stock_Quantity</dt>
            <dd class="col-sm-9">{Stock_Quantity}</dd>

            <dt class="col-sm-3">Supplier_Name</dt>
            <dd class="col-sm-9">{Supplier_Name}</dd>

            <dt class="col-sm-3">Supplier_Email</dt>
            <dd class="col-sm-9">{Supplier_Email}</dd>

            <dt class="col-sm-3">Supplier_ContactNo</dt>
            <dd class="col-sm-9">{Supplier_ContactNo}</dd>
            
         </dl>
            </div>
            <a href="/">
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

export default StockDetails;
