import React,{ Component } from 'react';
import axios from 'axios';


const initialState = {
  memberid:"",
  name:"",
  address:"",
  phone:"",
  email:"",
  pwd:"",
  mtype:""
}

class CreateMember extends Component {

  state = initialState;

  constructor(props){
      super(props);
      this.state={
        memberid:"",
        name:"",
        address:"",
        phone:"",
        email:"",
        pwd:"",
        mtype:""

      }
  }

  handleInputChange= (e)=>{
    const{name,value} = e.target;

    this.setState({
        ...this.state,
        [name]:value
    })
}



onSubmit = (e)=>{
  e.preventDefault();

  const {name,address,phone,email,pwd,mtype,memberid} = this.state;

  const data ={
      memberid:memberid,
      name:name,
      address:address,
      phone:phone,
      email:email,
      pwd:pwd,
      mtype:mtype
  };


  axios.post('http://localhost:8000/member/add',data).then((res)=>{
    if(res.data.success){
        alert("Member Added successfully")
        window.location.replace("/member")
        this.setState(
            {
              memberid:"",
              name:"",
              address:"",
              phone:"",
              email:"",
              pwd:"",
              mtype:""
            } 
        )
    }
}); 

}

render() {
  return (
      
          <div className="containerx">
      <div class="topnav">
         <a class="active" href="/">Home</a>
        <a href="/member">DashBoard</a>
        <a href="/member/add">Add Member</a>
       
      </div>
      <br/>

      <div className="uix">
      <h2 className="h3 mb-3 font-weight-normal text-center">ADD NEW MEMBER</h2>


            <form className="form-group" onSubmit={this.onSubmit}>

                                        <div className="fd">
                                            <label>Member ID :</label>
                                            <input type="text" required
                                             name="memberid" 
                                             className="form-control"
                                             placeholder="Ex:M001"
                                             value={this.state.memberid}
                                            onChange={this.handleInputChange}/>
                                        </div><br></br>

                                        <div className="fd">
                                            <label>Full Name :</label>
                                            <input type="text" required
                                             name="name" 
                                             className="form-control"
                                             placeholder="Enter Full Name"
                                             value={this.state.firstname}
                                            onChange={this.handleInputChange}/>
                                        </div><br></br>
 
                                        <div className="fd">
                                            <label>Address :</label>
                                            <input type="text" required
                                             name="address" 
                                             className="form-control"
                                             placeholder="Enter Address"
                                             value={this.state.address}
                                            onChange={this.handleInputChange}/>
                                        </div><br></br>
 
                                        <div className="fd">
                                            <label>Contact Number :</label>
                                            <input type="number" required
                                            name="phone" 
                                            className="form-control"
                                             placeholder="Enter Contact Number"
                                            value={this.state.phone}
                                            onChange={this.handleInputChange} />
                                            </div><br></br>
   
                                            <div className="fd">
                                            <label>E-mail :</label>
                                            <input type="text" required
                                            name="email" 
                                            className="form-control"
                                             placeholder="Enter E-mail"
                                            value={this.state.email}
                                            onChange={this.handleInputChange} />
                                            <div style={{fontSize:12, color:"red"}}> {this.state.emailError} </div>
                                        </div><br></br>
                                      
                                        <div className="fd">
                                            <label>Password :</label>
                                            <input type="pwd" 
                                             name="pwd" 
                                             className="form-control"
                                             placeholder="Enter Password"
                                             value={this.state.pwd}
                                             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                                            onChange={this.handleInputChange}/>
                                        </div><br></br>
        
                                        <div className="fd">
                                            <label>Membership Type :</label>
                                            <input type="text" required
                                             name="mtype" 
                                             className="form-control"
                                             placeholder="Ex:Silver"
                                             value={this.state.mtype}
                                            onChange={this.handleInputChange}/>
                                        </div>



                                        <div className="button fd">
                                        <input type="submit"  value="Save"/>  
                                        </div>

        </form>


</div>

    <div className="col-lg-3"></div>

              </div>
      
  );
}
}

export default CreateMember;