import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

const HomeView = () => {
  // async componentDidMount() {
  //   await axios
  //     .get(`${APIURL}/department/get-all-Department`)
  //     .then((response) => {
  //       this.setState({ departmentList: response.data.DepartmentList });
  //       console.log("departmentList =>", this.state.departmentList);

  //       if (response.data.code === 200) {
  //         toast.success(response.data.message);
  //       } else {
  //         toast.error(response.data.message);
  //       }
  //     });
  // }

  const [isLoading, setIsLoading] = useState(true);
  const [manager, setManager] = useState([]);
  const [baseData, setBaseData] = useState([]);
  const [deleted, setDeleted] = useState(0);
  const doc = new jsPDF("landscape");
  useEffect(() => {
    async function gedData() {
      try {
        const response = await axios.get(
          `http://localhost:8000/department/get-all-Department`
        );
        if (response.status === 200) {
          setManager(response.data.DepartmentList);
          setBaseData(response.data.DepartmentList);
        }
      } catch (error) {
        toast(error.response.data.message, { type: toast.TYPE.ERROR });
      }
      setIsLoading(false);
    }
    gedData();
  }, [deleted]);

  const downloadReport = () => {
    doc.text("Managers report", 30, 10);

    let array = [];
    manager.map((managers, index) => {
      let row = [];
      row.push(index + 1);
      row.push(managers.department_id);
      row.push(managers.department_name);
      row.push(managers.department_username);
      row.push(managers.department_password);
      row.push(managers.department_location);
      row.push(managers.department_manager);
      array.push(row);
      return row;
    });

    doc.autoTable({
      head: [
        [
          "#",
          "ID",
          "Name",
          "Dep Username",
          "Dep Password",
          "Dep Location",
          "Asigned Manager",
        ],
      ],

      body: array,
    });

    doc.save("Managers.pdf");
    window.location.reload();
  };

  const search = (inp) => {
    if (!inp.target.value) {
      setManager(baseData);
    } else {
      let searchList = baseData.filter(
        (data) =>
          data.department_id
            .toLowerCase()
            .includes(inp.target.value.toLowerCase()) ||
          data.department_name
            .toLowerCase()
            .includes(inp.target.value.toLowerCase())
      );
      setManager(searchList);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container" style={{minHeight:"700px"}}>
        <div className="table-alignment">
         <center> <h2 class="title">All Department Details</h2></center>

          <br />
          <div
            style={{
              marginLeft: 50,
            }}
          >
            <button
              onClick={downloadReport}
              style={{
                width: 200,
                height: 50,
                border: 10,
                fontSize: 20,
                color: "green",
                fontFamily: "cursive",
              }}
            >
              Download Report
            </button>
          </div>
          <div
            style={{
              marginLeft: 650,
              marginTop: -40,
            }}
          >
            <input
              type="search"
              placeholder="Search.."
              style={{
                marginInlineStart:"50%",
                width: "300px",
                height: "50px",
                border: 10,
                fontSize: 20,
                color: "green",
                fontFamily: "cursive",
              }}
              name="searchQuery"
           
              onChange={search}
            />
          </div>

          <hr />
        
     


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
             
              
            </tr>
          </thead>
          <tbody>
          {manager.length > 0 &&
                manager.map((department, index) => (
              <tr key={index}>
        



                      <td> {index + 1}</td>
                      <td>{department.department_id}</td>
                      <td>{department.department_name}</td>
                      <td>{department.department_username}</td>
                      <td>{department.department_password}</td>
                      <td>{department.department_location}</td>
                      <td>{department.department_manager}</td>
            

              </tr>
            ))}
          </tbody>

        </table>













        </div>
        {isLoading ? (
          <div className="container text-center py-5">
            <Loader type="Oval" color="#0d6efd" height={30} width={30} />
          </div>
        ) : manager.length > 0 ? (
          <></>
        ) : (
          <div className="container text-center py-5">
            <h3 style={{ marginTop: 50 }}>No Manager found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeView;
