import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class AllDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentList: [],
    };
    this.onDelete = this.onDelete.bind(this);
  }

  async componentDidMount() {
    await axios
      .get(`http://localhost:8000/department/get-all-Department`)
      .then((response) => {
        this.setState({ departmentList: response.data.DepartmentList });
        console.log("departmentList =>", this.state.departmentList);

        if (response.data.code === 200) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      });
  }

  onDelete(e, id) {
    axios.delete(`http://localhost:8000/department/delete-department/${id}`).then((res) => {
      console.log("res", res);
      if (res.data.code === 200) {
        toast.success(res.data.message);
        window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container" style={{minHeight:"700px"}}>
          <div className="table-alignment">
            <br/>
          <center>  <h2 class="title">All Department Details</h2></center>

            <br />
       

            <table className="table table-success table-striped" style={{marginTop:'40px'}}>
          <thead>
            <tr>

           

              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Dep User Name</th>
              <th scope="col">Dep Password</th>
              <th scope="col">Dep Location</th>
              <th scope="col">Asigned Manager</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          <tbody>
          {this.state.departmentList.length > 0 &&
                  this.state.departmentList.map((department, index) => (
              <tr key={index}>
              
                <td> {index + 1}</td>
                      <td>{department.department_id}</td>
                      <td>{department.department_name}</td>
                      <td>{department.department_username}</td>
                      <td>{department.department_password}</td>
                      <td>{department.department_location}</td>
                      <td>{department.department_manager}</td>
                <td>
                  <a className="btn btn-warning" href={`/department/edit_department/${department._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={(e) => {
                            if (
                              window.confirm(
                                "Do you want to delete this department?"
                              )
                            ) {
                              this.onDelete(e, department._id);
                            }
                          }}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>

                </td>

              </tr>
            ))}
          </tbody>

        </table>  










          </div>
        </div>
      </div>
    );
  }
}
export default AllDepartment;
