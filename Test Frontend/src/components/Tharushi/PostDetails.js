import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './TNavBar'

export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);

            }
        });
    }
    render() {

        const {Return_ID,Return_Date,Return_ItemName,Customer_Name,Customer_ContactNo,Return_Reason} = this.state.post;
        return (
            <div  style={{minHeight:"700px"}}>
            <NavBar/>
            <div style={{marginTop:'20px'}}>
                <h4>{Return_ID}</h4>
                <hr/>

                <dl className="row">
                    <dt className="col-sm-3">Return_Date</dt>
                    <dd className="col-sm-9">{Return_Date}</dd>

                    <dt className="col-sm-3">Return_ItemName</dt>
                    <dd className="col-sm-9">{Return_ItemName}</dd>

                    <dt className="col-sm-3">Customer_Name</dt>
                    <dd className="col-sm-9">{Customer_Name}</dd>

                    <dt className="col-sm-3">Customer_ContactNo</dt>
                    <dd className="col-sm-9">{Customer_ContactNo}</dd>

                    <dt className="col-sm-3">Return_Reason</dt>
                    <dd className="col-sm-9">{Return_Reason}</dd>
                </dl>
            </div>
            </div>
            
        )
    }
}