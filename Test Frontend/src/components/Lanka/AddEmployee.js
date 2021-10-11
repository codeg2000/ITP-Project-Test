import React, { useState } from "react";
import axios from "axios";
//import styled from "styled-components";
import { Button, Container } from 'react-bootstrap';
//import home1 from '../image/home1.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import validation from './validation';


const AddEmployee = (props) => {
    const history = useHistory();

    const [empDetails, setempDetails] = useState({
        clas: "",
        name: "",
        basicPay: "",
        salary: "",
        travelAllowance: "",
        medicalAllowance: "",
        bankAccountNo: ""
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setempDetails({
            ...empDetails,
            [name]: value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let err = validation(empDetails);
        console.log(err);
        setErrors(err);
        if (Object.keys(err).length == 0) {
            const { clas, name, basicPay, salary, travelAllowance, medicalAllowance, bankAccountNo } = empDetails;
            const data = {
                clas: clas,
                name: name,
                basicPay: basicPay,
                salary: salary,
                travelAllowance: travelAllowance,
                medicalAllowance: medicalAllowance,
                bankAccountNo: bankAccountNo
            }
            axios.post("http://localhost:8000/payment/add", data).then((res) => {
                if (res.data.success) {
                    setempDetails({
                        clas: "",
                        name: "",
                        basicPay: "",
                        salary: "",
                        travelAllowance: "",
                        medicalAllowance: "",
                        bankAccountNo: ""

                    })
                }
                history.push('/payment');
            });
        }
    };

    return (
       
            <Container style={{minHeight:"800px"}}>
                <h3 className="Lh3 mb-3" > Add New Salary Details </h3>
                <form className="Lform">
                    <div style={{background:"hsl(0,0%,0%,0.7)", padding:"15px"}}> 
                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt" className="form-control" name="clas" placeholder="Enter Your Class" value={empDetails.clas}
                            onChange={handleInputChange} />
                        {errors.clas && <p className="Lerror" > {errors.clas} </p>}
                    </div>

                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="name"
                            placeholder="Enter Your Name"
                            value={empDetails.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <p className="Lerror" >{errors.name} </p>}
                    </div>

                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="basicPay"
                            placeholder="Basic Pay"
                            value={empDetails.basicPay}
                            onChange={handleInputChange} />
                        {errors.basicPay && <p className="Lerror" >{errors.basicPay} </p>}
                    </div>

                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="salary"
                            placeholder="Enter Your Salary"
                            value={empDetails.salary}
                            onChange={handleInputChange} />
                        {errors.salary && <p className="Lerror" > {errors.salary} </p>}
                    </div>

                    <div className="form-group">
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="travelAllowance"
                            placeholder="Travel Allowance"
                            value={empDetails.travelAllowance}
                            onChange={handleInputChange} />
                        {errors.travelAllowance && <p className="Lerror" > {errors.travelAllowance}</p>}
                    </div>

                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="medicalAllowance"
                            placeholder="Medical Allowance"
                            value={empDetails.medicalAllowance}
                            onChange={handleInputChange} />
                        {errors.medicalAllowance && <p className="Lerror"> {errors.medicalAllowance} </p>}
                    </div>

                    <div className="form-group" id="bankAccount" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="bankAccountNo"
                            placeholder="Enter Your Bank Account No"
                            value={empDetails.bankAccountNo}
                            onChange={handleInputChange} />
                        {errors.bankAccountNo && <p className="Lerror"> {errors.bankAccountNo} </p>}
                    </div>
                    <Button type="submit" variant="primary" size="sm" onClick={onSubmit} className="LButton"> Save </Button>
                    </div>
                </form>
            </Container>
    )    

}



export default AddEmployee;