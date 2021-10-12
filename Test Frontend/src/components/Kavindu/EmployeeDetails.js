import React, { Component } from 'react';
import axios from 'axios';





class EmployeeDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/employee/emp/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }


    render() {

        const {empid,firstname,lastname,age,nicNo,gender,dob,address,contactNo,jobTitle,joinedDate} = this.state.post;
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
            <h4>{'Employee Details'}</h4>
            <hr/>
                <table class="table table-success table-striped">
                    <dl className="row">

                         <dt className="col-sm-3 text-left">Emp ID</dt>
                        <dd className="col-sm-9">{empid}</dd>
                        
                        <dt className="col-sm-3 text-left">First Name</dt>
                        <dd className="col-sm-9">{firstname}</dd>
               
                        <dt className="col-sm-3 text-left">Last Name</dt>
                        <dd className="col-sm-9">{lastname}</dd>
                        
                        <dt className="col-sm-3 text-left">Age</dt>
                        <dd className="col-sm-9">{age}</dd>
                        
                        <dt className="col-sm-3 text-left">NIC No</dt>
                        <dd className="col-sm-9">{nicNo}</dd>
                        
                        <dt className="col-sm-3 text-left">Gender</dt>
                        <dd className="col-sm-9">{gender}</dd>
                        
                        <dt className="col-sm-3 text-left">Date Of Birth</dt>
                        <dd className="col-sm-9">{dob}</dd>
                        
                        <dt className="col-sm-3 text-left">Permanent Address</dt>
                        <dd className="col-sm-9">{address}</dd>
                        
                        <dt className="col-sm-3 text-left">Contact No</dt>
                        <dd className="col-sm-9">{contactNo}</dd>
                        
                        <dt className="col-sm-3 text-left">Job Title</dt>
                        <dd className="col-sm-9">{jobTitle}</dd>
                        
                        <dt className="col-sm-3 text-left">joined Date</dt>
                        <dd className="col-sm-9">{joinedDate}</dd>

                    </dl>
                </table>
                <a href="/emp">
                     <button type="cancel" className="btn btn-primary btn-block" style={{marginLeft:'0px'}} >
                     <i class="fas fa-arrow-alt-circle-left"></i>
                    &nbsp; DashBoard
                     </button>
                </a>

            </div>

        </div>
        );
    }
}

export default EmployeeDetails;
