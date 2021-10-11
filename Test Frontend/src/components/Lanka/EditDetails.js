import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
//import styled from "styled-components";
import { Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


class EditDetails extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeclas = this.onChangeclas.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangebasicPay = this.onChangebasicPay.bind(this);
        this.onChangesalary = this.onChangesalary.bind(this);
        this.onChangetravelAllowance = this.onChangetravelAllowance.bind(this);
        this.onChangemedicalAllowance = this.onChangemedicalAllowance.bind(this);
        this.onChangebankAccountNo = this.onChangebankAccountNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            clas: "",
            name: "",
            basicPay: "",
            salary: "",
            travelAllowance: "",
            medicalAllowance: "",
            bankAccountNo: "",
        }
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('http://localhost:8000/payment/get/' + this.props.match.params.id)
            .then(response => {
                console.log(response)
                this.setState({
                    clas: response.data.employees.clas,
                    name: response.data.employees.name,
                    basicPay: response.data.employees.basicPay,
                    salary: response.data.employees.salary,
                    travelAllowance: response.data.employees.travelAllowance,
                    medicalAllowance: response.data.employees.medicalAllowance,
                    bankAccountNo: response.data.employees.bankAccountNo
                });
            }).catch(function(error) {
                console.log(error);
            })
    }

    onChangeclas(e) {
        this.setState({
            clas: e.target.value
        })
    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangebasicPay(e) {
        this.setState({
            basicPay: e.target.value
        });
    }

    onChangesalary(e) {
        this.setState({
            salary: e.target.value
        });
    }

    onChangemedicalAllowance(e) {
        this.setState({
            medicalAllowance: e.target.value
        });
    }

    onChangetravelAllowance(e) {
        this.setState({
            travelAllowance: e.target.value
        });
    }

    onChangebankAccountNo(e) {
        this.setState({
            bankAccountNo: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            clas: this.state.clas,
            name: this.state.name,
            basicPay: this.state.basicPay,
            salary: this.state.salary,
            medicalAllowance: this.state.medicalAllowance,
            travelAllowance: this.state.travelAllowance,
            bankAccountNo: this.state.bankAccountNo
        };
        axios.post('http://localhost:8000/payment/update/' + this.props.match.params.id, obj)
            .then(response => console.log(response.data));

        this.props.history.push('/payment');
    }

    render() {
        return ( <div className="Lcontainer container" style={{minHeight:"800px"}}>
            <h3><center>Edit Payment Details</center></h3>
            <form onSubmit = { this.onSubmit } className="LPform">
            <div style={{background:"hsl(180,100%,50%,0.9)", padding:"15px"}}> 
            <div className = "form-group" >
            
            <label > Class: </label> <input type = "text"
            required className = "form-control"
            value = { this.state.clas }
            onChange = { this.onChangeclas }
            /> </div >

            <div className = "form-group" >
            <label > Name: </label> <input type = "text"
            required className = "form-control"
            value = { this.state.name }
            onChange = { this.onChangename }
            /> </div >

            < div className = "form-group" >
            <label > Basic Pay: </label>  < input type = "text"
            className = "form-control"
            value = { this.state.basicPay }
            onChange = { this.onChangebasicPay }
            /> </div >

            <div className = "form-group" >
            <label > Salary: </label>  <
            input type = "text"
            className = "form-control"
            value = { this.state.salary }
            onChange = { this.onChangesalary }
            /> </div >

            <div className = "form-group" >
            <label > Medical Allowance: </label> <
            input type = "text"
            className = "form-control"
            value = { this.state.medicalAllowance }
            onChange = { this.onChangemedicalAllowance }
            /> </div >

            <div className = "form-group" >
            <label > Travel Allowance: </label>  <
            input type = "text"
            className = "form-control"
            value = { this.state.travelAllowance }
            onChange = { this.onChangetravelAllowance }
            /> </div >

            < div className = "form-group">
            <label > Bank Account Number: </label> <
            input type = "text"
            className = "form-control"
            value = { this.state.bankAccountNo }
            onChange = { this.onChangebankAccountNo }/> </div >

            <div className = "form-group" >
            < input type = "submit"
            value = "Edit"
            className = "btn btn-primary subButton"/>
            </div>
            </div> 
            </form>
            </div>
        );
    };
};




export default EditDetails;