import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

const initialState = {
  department_id: "",
  department_name: "",
  department_password: "",
  department_username: "",
  department_location: "",
  department_manager: "",
};

class EditDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState,
      departmentList: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async componentDidMount() {
    await axios
      .get(`http://localhost:8000/department/get-Department/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ departmentList: response.data.DepartmentDetails });
        console.log("departmentList =>", this.state.departmentList);

        if (response.data.code === 200) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
        this.setState({
          department_id: this.state.departmentList.department_id,
        });
        this.setState({
          department_name: this.state.departmentList.department_name,
        });
        this.setState({
          department_username: this.state.departmentList.department_username,
        });
        this.setState({
          department_password: this.state.departmentList.department_password,
        });
        this.setState({
          department_location: this.state.departmentList.department_location,
        });
        this.setState({
          department_manager: this.state.departmentList.department_manager,
        });
      });
  }

  onSubmit(event) {
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
      .put(
        `http://localhost:8000/department/update-department-details/${this.props.match.params.id}`,
        Department
      )
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          alert("updated succefully")
          window.setTimeout(function () {
            window.location.href = "/department/all_department";
          }, 2000);
        } else {
          toast.error(res.data.message);
        }
      });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container" style={{minHeight:"700px"}}>
          <div className="body-alignment">
          <center>  <h2 class="title">Edit {this.state.department_name}  Department Details</h2></center>
            <form onSubmit={this.onSubmit} method="POST">
              <div  style={{background:"hsl(180,60%,25%,0.9)",padding:"20px"}}>
              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Department ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="DP-000"
                  name="department_id"
                  value={this.state.department_id}
                  onChange={this.onChange}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Department Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="department_name"
                  value={this.state.department_name}
                  onChange={this.onChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Departmen Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="department_username"
                  value={this.state.department_username}
                  onChange={this.onChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Department Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="department_password"
                  value={this.state.department_password}
                  onChange={this.onChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Department Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="department_location"
                  value={this.state.department_location}
                  onChange={this.onChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{color:"white"}}>Asigned Manger ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="department_manager"
                  value={this.state.department_manager}
                  onChange={this.onChange}
                />
              </div>
            <center>  <button type="submit" style={{width:"30%",height:"50px",fontSize:"20px"}} className="btn btn-dark mb-2">
                Update Department
              </button></center>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditDepartment;
