import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home'

export default function Test(props) {

    const history = useHistory();
    const [employee, setEmployee]=useState([]);

    useEffect(() => {
        retrieveEmployee();
    }, []);
  
    const retrieveEmployee=()=>{
        axios.get("http://localhost:8090/employee").then(res =>{
            console.log('===============', res);
            if(res.data.success){
                setEmployee(res.data.existingemployee);
                console.log(employee);
            }
        });
    
    }

    const onDelete = (id) =>{
        axios.delete(`http://localhost:8090/employee/delete/${id}`).then((res) =>{
            alert(res.data.name + "has been delete Successfully");
            retrieveEmployee();
        })

    }

    const filterData =(employee,searchKey)=>{
        const result = employee.filter((employee)=>employee.name.toLowerCase.includes(searchKey))
        setEmployee({employee:result})
    }

    const handleSearchArea = (e) =>{
        const searchKey = e.currentTarget.value;
        axios.get("http://localhost:8090/employee").then(res =>{
            if(res.data.success){

                filterData(res.data.existingemployee,searchKey)
            }
        });
    }

    return (
        <Home1>
            <div className = "container">

            <div className = " search bar">
                <input
                    className = "form-control"
                    type="search"
                    placeholder = "search"
                    name="searchQuery"
                    onChange={handleSearchArea} 
                />
            </div>

            <table className = "table">
                <thead>
                    <tr>
                        <th scope = "col"></th>
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
                        <tr key='index'>
                            
                        <th scope = "row"> {index+1} </th>

                        <td>{employees.cls}</td>
                        <td>
                        <a href ='/get/${emploeyees._id}' style ={{ textDecoration:'none'}}>
                            {employees.name}
                            </a>
                            </td>
                        <td>{employees.basicPay}</td>
                        <td>{employees.salary}</td>
                        <td>{employees.travelAllowance}</td>
                        <td>{employees.medicalAllowance}</td>
                        <td>{employees.bankAccountNo}</td>

                        <td>
                            <Link className="btn btn-warning" to = {'/edit/' + props.obj_id}variant = "success" style = {{textDecoration:'none'}}>Edit</Link>&nbsp;
                            <Button className="btn btn-danger" onClick={() => onDelete(employees._id)}>Delete</Button>
                        </td>
                        </tr> 
                    ))}
                </tbody>

        </table>
            
                <Button variant="success" style={{textDecoration:'none',color:'white'}} onClick={() => history.push("/add")}>Add New Salary Details</Button>
            </div>
      </Home1>


    )
}

const Home1=styled.div`
 background: #f5f5f5;
min-height: 60vh;
padding-top: 6em;
.table{
padding:10px;
font-size:15px;
}
`;