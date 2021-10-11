import React,{useState,useEffect} from "react"
import axios from 'axios';


const EmpDetails=()=>{
    const [emp,setEmp]=useState({emp:{}})
  
    useEffect((res) => {
        const id = this.props.match.params.id;
        axios.get('http://localhost:8090/employee/get/$id')
        if(res.data.success){
        setEmp({
                emp:res.data.employee
            })
        }
      }, [])


    const { clas,name,basicPay,salary,travelAllowance,medicalAllowance,bankAccountNo} =emp;
    return(
        <div style={{margineTop :'20px'}}>
            
            <d1 className = "row">
                <dt className = "col -sm-3">Class</dt>
                <dd className="col-sm-9">{clas}</dd>

                <dt className = "col -sm-3">Name</dt>
                <dd className="col-sm-9">{name}</dd>

                <dt className = "col -sm-3">Basic Pay</dt>
                <dd className="col-sm-9">{basicPay}</dd>

                <dt className = "col -sm-3">Salary</dt>
                <dd className="col-sm-9">{salary}</dd>

                <dt className = "col -sm-3">Travel Allowance</dt>
                <dd className="col-sm-9">{travelAllowance}</dd>

                <dt className = "col -sm-3">Medical Allowance</dt>
                <dd className="col-sm-9">{medicalAllowance}</dd>

                <dt className = "col -sm-3">Bank Account No</dt>
                <dd className="col-sm-9">{bankAccountNo}</dd>

                <dt className = "col -sm-3">Class</dt>
                <dd className="col-sm-9">{clas}</dd>
            </d1>
            
        </div>
    );
}



export default EmpDetails;