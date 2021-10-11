import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentList: [],
    };
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

  onGranted(e, id) {
    let updateDetailsStatus = {
      is_access: 1,
    };

    console.log(id);
    axios
      .put(`http://localhost:8000/department/give-access/${id}`, updateDetailsStatus)
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
        window.location.reload();
      });
  }

  onDenied(e, id) {
    let updateDetailsStatus = {
      is_access: 0,
    };

    console.log(id);
    axios
      .put(`http://localhost:8000/department/give-access/${id}`, updateDetailsStatus)
      .then((res) => {
        console.log(updateDetailsStatus);
        if (res.data.code === 200) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
        window.location.reload();
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        
        <div className="container"  style={{minHeight:"700px"}}>
         <div className="table-alignment"><br/>
         <br/><center>   <h2 class="title">Manage Access</h2></center>

          
       



            <table className="table table-success table-striped" style={{marginTop:'40px'}}>
          <thead>
            <tr>

              <th scope="col">#</th>
              <th scope="col">Department ID</th>
              <th scope="col">Department Name</th>
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
                      <td>{department.department_manager}</td>
                      <td>
                        {department.is_access === 2 && (
                          <>
                            <Link className="btn btn-success"
                            style={{height:"40px"}}
                              onClick={(e) => {
                                {
                                  this.onGranted(e, department._id);
                                }
                              }}
                            >
                              <p className="status status-paid">Granted</p>
                            </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link
                            className="btn btn-danger"
                            style={{height:"40px"}}
                              onClick={(e) => {
                                {
                                  this.onDenied(e, department._id);
                                }
                              }}
                            >
                              <p className="status status-unpaid">Denied</p>
                            </Link>
                          </>
                        )}

                        {department.is_access === 1 && (
                          <p class="status status-paid">Manager Granted </p>
                        )}

                        {department.is_access === 0 && (
                          <p class="status status-unpaid">Manager Denied </p>
                        )}
                        {/* <p class="status status-pending">Pending</p> */}
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
export default Home;
