import React, { Component } from 'react'
import axios from 'axios'


const initialState = {
    empid:"",
    firstname:"",
    lastname:"",
    age:"",
    nicNo:"",
    gender:"",
    dob:"",
    address:"",
    contactNo:"",
    jobTitle:"",
    joinedDate:"",
    nicNoError:"",
    contactNoError:""
}

class CreateEmployee extends Component {

    state = initialState;

    constructor(props){
        super(props);
        this.state={
            empid:"",
            firstname:"",
            lastname:"",
            age:"",
            nicNo:"",
            gender:"",
            dob:"",
            address:"",
            contactNo:"",
            jobTitle:"",
            joinedDate:"",
            nicNoError:"",
            contactNoError:"" 

        }
    }

    handleInputChange= (e)=>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    validate=() =>{
        let nicNoError="";
        let contactNoError="";

        if(!this.state.contactNo){
            contactNoError="This field is required !!!";
        }

        if(!this.state.nicNo){
            nicNoError="This field is required !!!";
        }

        if(nicNoError || contactNoError ){
            this.setState({nicNoError,contactNoError});
            return false;
        }
        return true;
    };


    onSubmit = (e)=>{
        e.preventDefault();

        const { empid,firstname,lastname,age,nicNo,gender,dob,address,contactNo,jobTitle,joinedDate} = this.state;

        const data ={
            empid:empid,
            firstname: firstname,
            lastname: lastname,
            age: age,
            nicNo:nicNo,
            gender:gender,
            dob:dob,
            address:address,
            contactNo:contactNo,
            jobTitle:jobTitle,
            joinedDate:joinedDate
        };

        
        // NIC validation
        const isValid = this.validate();
        if(isValid){
        console.log(data)
        //clear form
        this.setState(initialState);
        }


        axios.post('http://localhost:8000/employee/add',data).then((res)=>{
            if(res.data.success){
                alert("Employee Added successfully")
                window.location.replace("/emp")
                this.setState(
                    {
                        empid:"",
                        firstname:"",
                        lastname:"",
                        age:"",
                        nicNo:"",
                        gender:"",
                        dob:"",
                        address:"",
                        contactNo:"",
                        jobTitle:"",
                        joinedDate:""
                    }
                )
            }
        })  
    }


    render() {
        return (
            
                <div className="container1">
                    <div class="topnav">
                    <a class="active" href="/">Home</a>
                    <a  href="/emp">DashBoard</a>
                    <a  href="/emp/add">Add Employee</a>
                    <a href="/emp/leave/create">Create Leave</a>
                    <a href="/emp/leave">View Leaves</a>
                 </div>
                <br/>
                
                    <div className="row">

                        <div className="col-lg-3"></div>

                        <div className="col-lg-6">

                            <div className="ui">
                            <h2 className="h3 mb-3 font-weight-normal text-center">Add New Employee</h2>
                            <br/>
                                <form className="form-group" onSubmit={this.onSubmit}>

                                <div className="row">
                                        
                                        <div className="col-lg-6">
                                            <label>Employee ID :</label>
                                            <input type="text" 
                                             name="empid" 
                                             className="form-control"
                                             placeholder="ex:-E0001"
                                             value={this.state.empid}
                                            onChange={this.handleInputChange} />
                                        </div>

                                    </div>
                                    <br/>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label>First Name :</label>
                                            <input type="text"
                                             name="firstname" 
                                             className="form-control"
                                             placeholder="Enter Employee First Name"
                                             value={this.state.firstname}
                                            onChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-lg-6">
                                            <label>Last Name :</label>
                                            <input type="text"
                                            name="lastname"
                                             className="form-control"
                                             placeholder="Enter Employee Last Name" 
                                             value={this.state.lastname}
                                            onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label>Date of Birth :</label>
                                            <input type="date"
                                             name="dob"
                                             className="form-control" 
                                            placeholder="Enter Employee Birth Date"
                                            value={this.state.dob}
                                            onChange={this.handleInputChange}/>
                                        </div>

                                        <div className="col-lg-6">
                                            <label>Gender :</label>
                                            <input type="text"
                                             name="gender" 
                                             className="form-control"
                                             placeholder="Enter Employee Gender" 
                                             value={this.state.gender}
                                            onChange={this.handleInputChange}/>
                                        </div>
                                    </div>
                                    <br/>
                                    <label>Address :</label>
                                    <input type="text"
                                     name="address" 
                                    className="form-control"
                                    placeholder="Enter Employee Address"
                                    value={this.state.address}
                                    onChange={this.handleInputChange} />
                                    <br/>
                                    <div>
                                    <label>NIC No :</label>
                                    <input type="text"
                                     name="nicNo" 
                                    className="form-control"
                                    placeholder="Enter Employee NIC No"
                                    value={this.state.nicNo}
                                    onChange={this.handleInputChange} />
                                    <div style={{fontSize:12, color:"red"}}> {this.state.nicNoError} </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label>Age :</label>
                                            <input type="text"
                                             name="age" 
                                             className="form-control"
                                            placeholder="Enter Employee Age"
                                            value={this.state.age}
                                            onChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-lg-6">
                                            <label>Contact Number :</label>
                                            <input type="number"
                                            name="contactNo" 
                                            className="form-control"
                                             placeholder="Enter Employee Contact Number"
                                            value={this.state.contactNo}
                                            onChange={this.handleInputChange} />
                                            <div style={{fontSize:12, color:"red"}}> {this.state.contactNoError} </div>
                                        </div>
                                    </div>
                                    <br/>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label>Job Title :</label>
                                            <input type="text"
                                             name="jobTitle" 
                                             className="form-control" 
                                             placeholder="Enter Employee Job Title"
                                             value={this.state.jobTitle}
                                            onChange={this.handleInputChange} />
                                        </div>

                                        <div className="col-lg-6">
                                            <label>Joined Date :</label>
                                            <input type="date" 
                                            name="joinedDate" 
                                            className="form-control" 
                                            placeholder="Enter Employee Joined Date" 
                                            value={this.state.joinedDate}
                                            onChange={this.handleInputChange}/>
                                        </div>
                                    </div>

                                    <div className="button">
                                    <input type="submit"  value="Save"/>   
                                    </div>

                                </form>

                            </div>

                        </div>

                        <div className="col-lg-3"></div>

                    </div>

                </div>
            
        );
    }
}

export default CreateEmployee;
