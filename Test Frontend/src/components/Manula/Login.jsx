import React, { Component } from "react";
import { toast } from "react-toastify";

const initialState = {
  username: "",
  password: "",
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    if (
      this.state.username === "it_manager" &&
      this.state.password === "it_manager@1234"
    ) {
      toast.success("IT manager is logged successfully.");
      window.setTimeout(function () {
        window.location.href = "/department/home";
      }, 2000);
    }
    if (
      this.state.username === "it_manager" &&
      this.state.password !== "it_manager@1234"
    ) {
      toast.error("Password does not match with this user.");
    }
    if (this.state.username !== "it_manager") {
      toast.error("Invalid User Name.");
    }
  }

  render() {
    return (
      <div>
        <div className="container" style={{minHeight:"700px"}}>
          <div className="body-alignment-login">
           <br/><br/><br/><br/>
            <div className="container" >
          <center>  <h2 class="title">Login to this System</h2></center>
       
          <center>  <form onSubmit={this.onSubmit} method="POST" >
            <br/>
            <div style={{background:"hsl(180,60%,25%,0.9)",paddingTop:"40px",margin:"0px 300px 300px 300px "}}>
              <div className="mb-5">

                <label className="form-label" style={{color:"white"}}>IT Manager Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  style={{width:"450px"}}
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>

              <div className="mb-5">
                <label className="form-label" style={{color:"white"}}> Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  style={{width:"450px"}}
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>

              <button type="submit" style={{width:"40%"}} className="btn btn-danger mb-4">
                Login
              </button>
              </div>
            </form></center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
