import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
//import styled from "styled-components";

export default function Report() {
    const location = useLocation();
    const [employee, setEmployee] = useState([]);

    useEffect(()=>{
        if(!location.state){
            retrieveEmployee();
        } else {
            console.log('11111111111', location.state.empData);
            setEmployee(location.state.empData);
        }
    },[])

    const retrieveEmployee = async () => {
        await axios.get("http://localhost:8090/employee").then(res =>{
            console.log('2222222', res);
            if(res.data.success){
                setEmployee(res.data.existingemployee);
                console.log(employee);
            }
        });
    }

    return(
        


            <table className = "table">
                <thead>
                    <tr>
                        <th scope = "col"></th>
                        <th scope = "col">Name</th>
                        <th scope = "col">Salary</th>
                        <th scope = "col">Others</th>
                        <th scope = "col">Total</th>
                    </tr>
                </thead>

                <tbody>   
            
                    {employee.length>0 && employee.map((employees,index) =>(
                        <tr key={employees._id}>
                            
                            <th scope = "row"> {index+1} </th>

                            <td>{employees.name}</td>
                            <td>{employees.salary}</td>
                            <td>{employees.medicalAllowance+employees.travelAllowance}</td>
                            <td>{employees.salary+employees.medicalAllowance+employees.travelAllowance}</td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        
    )
}

