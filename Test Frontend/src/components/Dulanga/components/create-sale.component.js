import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ItemCard from '../subComponents/ItemCard/ItemCard';
import { height } from '@mui/system';
import * as Utils from "../utils/constants"
import { invalid } from 'moment';
import Navbar from './navbar.component';

export default class CreateSales extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemname = this.onChangeItemname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      itemname: '',
      description: '',
      quantity: 0,
      price: 0,
      date: new Date(),
      newArr: [],
      invaidQuantity: false,
      invaidDes: false,
      errorMsg: "",
      errorMsgDes: ""
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/items/')
      .then(response => {
        console.log("Res ***** ", response);
        this.setState({ newArr: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeItemname(e) {

  }

  onChangeDescription(e) {
    const regex = Utils.REGEX_DES;
    if (regex.test(e.target.value)) {
      this.setState({
        description: e.target.value,
        invaidDes: false,
        errorMsgDes: ""
      })
    } else if (e.target.value == "") {
      this.setState({
        description: e.target.value,
        invaidDes: true,
        errorMsgDes: "Description is mandotary"
      })
    }
    else {
      this.setState({
        description: e.target.value,
        invaidDes: true,
        errorMsgDes: "Invalid Format"
      })

    }
  }

  onChangeQuantity(e) {
    const regex = Utils.REGEX_SELL_BUY_FUNC;
    if (regex.test(e.target.value)) {
      this.setState({
        quantity: e.target.value,
        invaidQuantity: false,
        errorMsg: ""
      })
    } else if (e.target.value == "") {
      this.setState({
        quantity: e.target.value,
        invaidQuantity: true,
        errorMsg: "Quantity is mandotary"
      })
    }
    else {
      this.setState({
        quantity: e.target.value,
        invaidQuantity: true,
        errorMsg: "Invalid Format"
      })
    }

  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.quantity == "" && this.state.description == "") {
      this.setState({
        invaidDes: true,
        invaidQuantity: true,
        errorMsg: "Mandotary Field",
        errorMsgDes: "Mandotary Field"
      })
    } else if (this.state.quantity && this.state.description == "") {
      this.setState({
        invaidDes: true,
        invaidQuantity: false,
        errorMsg: "",
        errorMsgDes: "Mandotary Field"
      })
    } else if (this.state.quantity == "" && this.state.description) {
      this.setState({
        invaidDes: false,
        invaidQuantity: true,
        errorMsg: "Mandotary Field",
        errorMsgDes: ""
      })
    } else {
      const sale = {
        itemname: this.state.itemname,
        description: this.state.description,
        quantity: this.state.quantity,
        price: this.state.price,
        date: this.state.date
      }

      console.log(sale);

      axios.post('http://localhost:8000/sales/add', sale)
        .then(res => console.log(res.data));

      window.location = '/sales/Saleslist';
    }
  }

  itemSelected = (data) => {
    console.log("sasasasasa", data);
    this.setState({
      itemname: data.itemName,
      price: data.itemPrice
    })
  }

  numberWithCommas = (x) => {
    const value = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return value;
  }

  render() {
    return (
      <div
        class="bg_image"
      >
        <Navbar />
        <div className="container1">
          <h3 className="text">Create New Sale Log</h3>

          <div className="row">
            <ItemCard
              data={this.state.newArr}
              selectedItem={(data) => this.itemSelected(data)}
            />
          </div>

          <form onSubmit={this.onSubmit}>
            <div className="form-group" style={{ marginTop: "30px" }}>
              <label className="text">Description: </label>
              <input type="text"
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
              {this.state.invaidDes ? <h5 style={{ color: 'red' }}>{this.state.errorMsgDes}</h5> : null}
            </div>
            <div className="form-group" style={{ marginTop: "30px" }}>
              <label className="text">Quantity : </label>
              <input
                type="text"
                className="form-control"
                value={this.state.quantity}
                onChange={this.onChangeQuantity}
              />
              {this.state.invaidQuantity ? <h5 style={{ color: 'red' }}>{this.state.errorMsg}</h5> : null}
            </div>

            <div style={{ marginTop: "30px", display: 'flex', flexDirection: 'row' }}>
              <h2 className="text">Total amount : </h2>
              <h2 className="text">{this.numberWithCommas(this.state.quantity * this.state.price)}</h2>
            </div>

            <div className="form-group" style={{ marginTop: "30px", marginBottom: "50px" }}>
              <input type="submit" value="Create a Sale" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const dataArr = [
  {
    "itemName": "ASI",
    "des": "ASI",

  },
  {
    "itemName": "ABC",
    "des": "ABC"
  },
]