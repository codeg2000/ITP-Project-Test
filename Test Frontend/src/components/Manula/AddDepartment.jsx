import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
import { Form,Button,Col,Row,InputGroup } from "react-bootstrap";

const initialState = {
  department_id: "",
  department_name: "",
  department_password: "",
  department_username: "",
  department_location: "",
  department_manager: "",
};

class AddDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.state={validated:false}
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {


    const form = event.currentTarget;
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
    else{


    event.preventDefault();

    let Department = {
      department_id: this.state.department_id,
      department_name: this.state.department_name,
      department_password: this.state.department_password,
      department_username: this.state.department_username,
      department_location: this.state.department_location,
      department_manager: this.state.department_manager,
    };

    axios
      .post(`http://localhost:8000/department/add-new-department`, Department)
      .then((res) => {
        console.log("res", res);
        alert("Department added successful")
        window.location.replace("/department/home");
        if (res.data.code === 200) {
          toast.success(res.data.message);
          window.setTimeout(function () {
            window.location.href = "/department/add_department";
          }, 2000);
        } else {
          toast.error(res.data.message);
        }
      });

    }
    this.setState({ validated: true })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container" style={{minHeight:"700px"}}>
          <div className="body-alignment">
            <br/>
           <center> <h2 class="title">Add New Department</h2></center>
            <Form noValidate validated={this.state.validated}

 onSubmit={this.onSubmit} method="POST">
              <div style={{background:"hsl(180,60%,25%,0.9)",padding:"20px"}}>
              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Department ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="DP-000"
                  name="department_id"
                  required
                  value={this.state.department_id}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
Please provide Department ID
</Form.Control.Feedback> 
              </div>

              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Department Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="department_name"
                  required
                  placeholder="Enter Department Name"
                  value={this.state.department_name}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
Please provide Department Name
</Form.Control.Feedback> 
              </div>

              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Department Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="department_username"
                  required
                  placeholder="Enter Department User Name"
                  value={this.state.department_username}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
Please provide Department Username
</Form.Control.Feedback> 
              </div>

              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Department Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="department_password"
                  required
                  placeholder="Enter Department Password"
                  value={this.state.department_password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
Please provide Department Password
</Form.Control.Feedback> 
              </div>

              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Department Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Department Location"
                  name="department_location"
                  required
                  value={this.state.department_location}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
Please provide Department Location
</Form.Control.Feedback> 
              </div>

              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Asigned Manger ID</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter Assigned manager Id"
                  name="department_manager"
                  value={this.state.department_manager}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid">
Please provide Asigned Manger ID
</Form.Control.Feedback> 
              </div>
          <center>    <button type="submit"  style={{width:"30%",height:"50px",fontSize:"20px"}} className="btn btn-dark  mb-4">
                Add Department
              </button></center>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddDepartment;
