import React, { Component } from 'react';
import axios from 'axios';



class EditLeave extends Component {

    
    constructor(props){
        super(props);
        this.state={
            nicNo:"",
            fromDate:"",
            toDate:"",
            typeOfLeave:"",
            description:""
           
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

        const { nicNo,fromDate,toDate,typeOfLeave,description} = this.state;

        const data ={

            nicNo: nicNo,
            fromDate: fromDate,
            toDate: toDate,
            typeOfLeave:typeOfLeave,
            description:description
           
        };

        console.log(data)

        axios.put(`http://localhost:8000/post/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Leave details updated successfully")
                window.location.replace("/emp/leave")
                this.setState(
                    {
                        nicNo:"",
                        fromDate:"",
                        toDate:"",
                        typeOfLeave:"",
                        description:""
                    }
                )
            }
        })  
    }


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/post/specific/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    nicNo:res.data.post.nicNo,
                    fromDate:res.data.post.fromDate,
                    toDate:res.data.post.toDate,
                    typeOfLeave:res.data.post.typeOfLeave,
                    description:res.data.post.description
                    
                });

                console.log(this.state.post);
            }
        });
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
                            <h2 className="h3 mb-3 font-weight-normal text-center">Edit Leave </h2>

                                <form className="form-group" onSubmit={this.onSubmit}>

                                    <div>
                                    <label>NIC No :</label>
                                    <input type="text"
                                    name="nicNo" 
                                    className="form-control"
                                    placeholder="Enter Employee NIC NO"
                                    value={this.state.nicNo}
                                    onChange={this.handleInputChange} />
                                    </div>
                                    <br/>

                                    <div>
                                    <label>From Date :</label>
                                    <input type="date"
                                    name="fromDate" 
                                    className="form-control"
                                    placeholder="Enter Employee First Name"
                                    value={this.state.fromDate}
                                    onChange={this.handleInputChange} />
                                    </div>
                                    <br/>

                                    <div>
                                    <label>To Date :</label>
                                    <input type="date"
                                    name="todate" 
                                    className="form-control"
                                    placeholder="Enter Employee First Name"
                                    value={this.state.toDate}
                                    onChange={this.handleInputChange} />
                                    </div>
                                    <br/>

                                    <div>
                                    <label>Type Of Leave :</label>
                                    <input type="text"
                                    name="typeOfLeave" 
                                    className="form-control"
                                    placeholder="Enter Employee First Name"
                                    value={this.state.typeOfLeave}
                                    onChange={this.handleInputChange} />
                                    </div>
                                    <br/>

                                    <div>
                                    <label>Description :</label>
                                    <textarea type="text"
                                    name="description" 
                                    className="form-control"
                                    placeholder="Enter Employee First Name"
                                    style={{height:130}}
                                    value={this.state.description}
                                    onChange={this.handleInputChange} />
                                    </div>

                                    <div className="button">
                                    <input type="submit"  value="Update"/>   
                                    </div>
                            
                                </form>

                        
                            </div>

                        </div>
                
                    </div>
                
                </div>
        );
    }
}

export default EditLeave;
