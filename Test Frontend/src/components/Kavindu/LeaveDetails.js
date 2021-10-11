import React, { Component } from 'react';
import axios from 'axios';



class LeaveDetails extends Component {

            constructor(props){
                super(props);
        
                this.state={
                    post:{}
                };
            }
        
            componentDidMount(){
        
                const id = this.props.match.params.id;
        
                axios.get(`http://localhost:8000/post/specific/${id}`).then((res) =>{
                    if(res.data.success){
                        this.setState({
                            post:res.data.post
                        });
        
                        console.log(this.state.post);
                    }
                });
            }
        
        
            render() {
        
                const {nicNo,fromDate,toDate,typeOfLeave,description} = this.state.post;
                return (
                    <div className="container1">
                        <div class="topnav">
                        <a class="active" href="/">Home</a>
                            <a  href="/emp">DashBoard</a>
                            <a  href="/emp/add">Add Employee</a>
                            <a href="/emp/leave/create">Create Leave</a>
                            <a href="/emp/leave">View Leaves</a>
                        </div>
                        <div className="ui2">
                            <table class="table table-striped table-hover">
                                <dl className="row">
                                    <dt className="col-sm-3 text-center">NIC No</dt>
                                    <dd className="col-sm-9">{nicNo}</dd>
                                    <br/>
                                    <dt className="col-sm-3 text-center">From fromDate</dt>
                                    <dd className="col-sm-9">{fromDate}</dd>
                                    <br/>
                                    <dt className="col-sm-3 text-center">To Date</dt>
                                    <dd className="col-sm-9">{toDate}</dd>
                                    <br/>
                                    <dt className="col-sm-3 text-center">Type of Leave </dt>
                                    <dd className="col-sm-9">{typeOfLeave}</dd>
                                    <br/>
                                    <dt className="col-sm-3 text-center">Description</dt>
                                    <dd className="col-sm-9">{description}</dd>

                                </dl>

                            </table>
                            <a href="/emp/leave">
                            <button type="cancel" className="btn btn-primary btn-block" style={{marginLeft:'30px'}} >
                            <i class="fas fa-arrow-alt-circle-left"></i>
                            &nbsp; DashBoard
                            </button>
                </a>
                        </div>
                    </div>
        );
    }
}

export default LeaveDetails;
