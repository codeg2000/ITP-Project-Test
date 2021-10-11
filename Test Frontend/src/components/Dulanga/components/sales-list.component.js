import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment"
import TextField from '@mui/material/TextField';
import AlertDialog from "../subComponents/AlertDialog/AlertDialog"
import Navbar from './navbar.component';

const Sale = props => (
  <tr>
    <td>{props.sale.itemname}</td>
    <td>{props.sale.description}</td>
    <td>{props.sale.quantity}</td>
    <td>{props.sale.price}</td>
    <td>{(props.sale.quantity * props.sale.price)}</td>
    <td>{moment(props.sale.date).format('DD MMMM YY')}</td>
    <td>
      <Link to={"/sales/edit/" + props.sale._id}>  <button class="btn btn-warning" >Edit </button></Link>  <a href="#" onClick={() => { props.deleteSale(props.sale._id) }}><button class="btn btn-danger" >Delete </button></a>
    </td>
  </tr>
)

export default class SalesList extends Component {

  constructor(props) {
    super(props);

    this.deleteSale = this.deleteSale.bind(this)
    this.search = this.search.bind(this)
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
  }

  numberWithCommas = (x) => {
    const value = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return value;
  }

  deleteSale(id) {
    axios.delete('http://localhost:8000/sales/' + id)
      .then(response => {
        alert("Successfully Deleted")
        console.log(response.data)
      });

    this.setState({
      sales: this.state.sales.filter(el => el._id !== id)
    })
  }

  saleList() {
    return this.state.sales.map(currentsale => {
      return <Sale sale={currentsale} deleteSale={this.deleteSale} key={currentsale._id} />;
    })
  }

  search(e) {
    this.setState(
      {

        filter: e.target.value
      }, () => {
        let filteredSales = this.state.allSales.filter((sale) => {
          if (this.state.filter != "") {
            console.log("%%%", this.state.filter)
            return sale.itemname.indexOf(this.state.filter) != -1;

          }

        })

        if (e.target.value != "") {
          this.setState({
            sales: filteredSales
          })
        }
        else {

          this.setState({
            sales: this.state.allSales
          })
        }


      }
    );
  }

  render() {
    return (
      <div
        class="bg_image"
      >
        <Navbar />
        <div className="container1">
          <div class="row">
            <div class="col-8">
              <h3 className="text">Logged Sales</h3>
            </div>
            {/* <AlertDialog /> */}
            <div
              class="col-4"
              style={{ float: "right", height: "80px" }}
            >
              <TextField
                id="outlined-basic"
                label="Search Name"
                variant="outlined"
                size="small"
                type="search"
                style={{marginTop:"30px",marginLeft:"150px",background:"white"}}
                onChange={this.search}
              />
            </div>
          </div>

          <table class="table table-success table-striped">
            <thead className="thead-light">
              <tr class="table-primary">
                <th>Item name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Amount</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.saleList()}
            </tbody>
          </table>
          <div>
            <button class="btn btn-primary" onClick={() => this.exportPDF()}>Generate Report</button>
          </div>
        </div>
      </div>
    )
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Sunrise Supermarket";
    const headers = [["Item Name", "Description", "Quantity", "Price", "Total Amount", "date"]];

    let totAmount = 0
    this.state.sales.forEach(item => {
      totAmount = totAmount + (item.price * item.quantity)
    })

    const data = this.state.sales.map(elt => [elt.itemname, elt.description, elt.quantity, elt.price, this.numberWithCommas(elt.price * elt.quantity), moment(elt.date).format('DD MMM YY, h:mm A')]);

    let content = {
      startY: 90,
      head: headers,
      body: data
    };

    const price = "Total Amount : " + this.numberWithCommas(totAmount)

    doc.text(title, marginLeft, 40);
    doc.text(price, marginLeft, 70)
    doc.autoTable(content);
    doc.save("Sales report.pdf")
  }


}