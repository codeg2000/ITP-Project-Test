import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import NavBar from './LNavBar';
//import styled, { ThemeConsumer } from 'styled-components';


export default function Home(props) {

    const history = useHistory();
    const [employee, setEmployee]=useState([]);

    useEffect(() => {
        retrieveEmployee();
    }, []);


    const retrieveEmployee=()=>{
        axios.get("http://localhost:8000/payment").then(res =>{
            console.log('===============', res);
            if(res.data.success){
                setEmployee(res.data.existingemployee);
                console.log(employee);
            }
        });
    }

    const onDelete = (id) =>{
        axios.delete("http://localhost:8000/payment/delete/"+id).then((res) =>{
            alert("delete Successfully");
            retrieveEmployee();
        })

    }

       const filterData =(employee,searchKey)=>{
        const result = employee.filter((employee)=>employee.name.toLowerCase().includes(searchKey))
        console.log(result);
        setEmployee(result);
        
       };
    
     const handleSearchArea = (e) =>{
      e.preventDefault();
      const searchKey = e.currentTarget.value;
         axios.get("http://localhost:8000/payment").then(res =>{
       if(res.data.success){
        filterData(res.data.existingemployee,searchKey)
        }
      
    });
};

    const navigateReport = () => {
        history.push(
            "/payment/report" 
        )
    }

    return (
            <div>
                <NavBar/>
            <div className = "container" style={{minHeight:"800px"}}>
            
            <div className = " search bar" style={{marginTop:"70px"}}>
                <input
                    className = "form-control"
                    type="search"
                    placeholder = "search"
                    name="searchQuery"
                    onChange={handleSearchArea} 
                />
            </div>
        <br/>
        <h1><center>All Payment Details</center></h1>
        <table className="table table-success table-striped" style={{marginTop:'40px'}}>
          <thead>
            <tr>
                <th scope = "col">#</th>
                <th scope = "col">Class</th>
                <th scope = "col">Full Name</th>
                <th scope = "col">Basic Pay</th>
                <th scope = "col">Salary</th>
                <th scope = "col">Travel Allowance</th>
                <th scope = "col">Medical Allowance</th>
                <th scope = "col">Bank Account No</th>
                <th scope = "col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.length>0 && employee.map((employees,index) =>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{employees.clas}</td>
                <td>
                    {employees.name}
                    </td>
                        <td>{employees.basicPay}</td>                                            
                        <td>{employees.salary}</td>
                        <td>{employees.travelAllowance}</td>
                        <td>{employees.medicalAllowance}</td>
                        <td>{employees.bankAccountNo}</td>
                <td>
                  <a className="btn btn-warning" href={'/payment/update/'+employees._id}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=> onDelete(employees._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>

                </td>

              </tr>
            ))}
          </tbody>

        </table>        

                <Button variant="success" class="btn btn-primary" style={{textDecoration:'none',color:'black'}} onClick={() => history.push("/payment/add")}>Add New Salary Details</Button>&nbsp;&nbsp;
                
                <Button 
                    variant="success"  
                    class="btn btn-primary"
                    style={{textDecoration:'none',color:'black'}} 
                    onClick={navigateReport} 
                >
                    Generate Report
                </Button>
                
            </div>
            </div>
    )
}






