import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment"
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries
} from "@devexpress/dx-react-chart-bootstrap4";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import { render } from "react-dom";
import { scaleBand, scaleLinear } from "@devexpress/dx-chart-core";
import { ArgumentScale, Stack, ValueScale } from "@devexpress/dx-react-chart";
import Navbar from './navbar.component';
const data = [
    {
        day: "Sunday",
        value: 4.5
    },
    {
        day: "Monday",
        val: 1.5
    },
    {
        day: "Thuesday",
        val: 3
    },
    {
        day: "Wednesday",
        val: 5
    }
]

const options = {
    scales: {
        yAxes: [
            {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
        xAxes: [
            {
                stacked: true,
            },
        ],
    },
};



const Sale = props => (
    <tr>
        <td>{props.sale.itemname}</td>
        <td>{props.sale.description}</td>
        <td>{props.sale.quantity}</td>
        <td>{props.sale.price}</td>
        <td>{(props.sale.quantity * props.sale.price)}</td>
        <td>{moment(props.sale.date).format('DD MMMM YY')}</td>
        <td>
            <Link to={"/edit/" + props.sale._id}>  <button class="btn btn-warning" >Edit </button></Link>  <a href="#" onClick={() => { props.deleteSale(props.sale._id) }}><button class="btn btn-danger" >Delete </button></a>
        </td>
    </tr>
)

export default class SalesChart extends Component {

    constructor(props) {
        super(props);

        this.deleteSale = this.deleteSale.bind(this)
        this.state = {
            sales: [],
            filter: "",
            allSales: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/sales/')
            .then(response => {
                this.setState({
                    sales: response.data,
                    allSales: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
        setTimeout(() => {
            console.log("this.sta", this.state.sales);
        }, 2000);
    }

    numberWithCommas = (x) => {
        const value = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return value;
    }

    deleteSale(id) {
        axios.delete('http://localhost:8000/sales/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            sales: this.state.sales.filter(el => el._id !== id)
        })
    }

    saleList() {
        return this.state.sales.map(currentsale => {
            return <Sale sale={currentsale} deleteSale={this.deleteSale} key={currentsale._id} />;
        })
    }

    render() {
        return (
            <div
                class="bg_image"
            >
                <Navbar />
                <div className="container1">
                    <div style={{ width: '100%', backgroundColor: 'white', marginTop: "10%" }}>
                        <Chart data={this.state.sales}>
                            <ArgumentScale factory={scaleBand} />
                            {/* <ValueScale factory={() => this.scale} /> */}

                            <ArgumentAxis />

                            <ValueAxis />

                            <BarSeries valueField="quantity" argumentField="itemname" name="Series 1" />

                            <Stack />
                        </Chart>
                    </div>
                </div>
            </div>
        )
    }



}