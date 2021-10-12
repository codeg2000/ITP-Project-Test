import React, { Component } from 'react';
import axios from 'axios';

class EditMember extends Component{

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
        const id = this.props.match.params.id;

        const {memberid,name,address,phone,email,pwd,mtype} = this.state;

        const data ={
            memberid:memberid,  
            name:name,
            address:address,
            phone:phone,
            email:email,
            pwd:pwd,
            mtype:mtype
        };

        console.log(data)

        axios.put(`http://localhost:8000/member/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Member details updated successfully")
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
        })  
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/member/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    memberid:res.data.post.memberid,
                    name:res.data.post.name,
                    address:res.data.post.address,
                    phone:res.data.post.phone,
                    email:res.data.post.email,
                    pwd:res.data.post.pwd,
                    mtype:res.data.post.mtype
                });

                console.log(this.state.post);
            }
        });
    }



  render(){
    return (
      
        <div className="containerx">
    <div class="topnav">
      <a class="active" href="/">Home</a>
      <a href="/member">DashBoard</a>
      <a href="/member/add">Add Member</a>
    </div>
    <br/>

    <div className="ui3">
    <h2 className="h3 mb-3 font-weight-normal text-center">EDIT MEMBER</h2>
 

        
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
                                          <input type="text"
                                           name="name" 
                                           className="form-control"
                                           placeholder="Enter Full Name"
                                           value={this.state.name}
                                          onChange={this.handleInputChange}/>
                                      </div>
                                        <br></br>

                                        <div className="fd">
                                          <label>Address :</label>
                                          <input type="text"
                                           name="address" 
                                           className="form-control"
                                           placeholder="Enter Address"
                                           value={this.state.address}
                                          onChange={this.handleInputChange}/>
                                      </div>
                                      <br></br>
  
                                      <div className="fd">
                                          <label>Contact Number :</label>
                                          <input type="number"
                                          name="phone" 
                                          className="form-control"
                                           placeholder="Enter Contact Number"
                                          value={this.state.phone}
                                          onChange={this.handleInputChange} />
                                      </div>
                                      <br></br>

                                      <div className="fd">
                                          <label>E-mail :</label>
                                          <input type="text"
                                          name="email" 
                                          className="form-control"
                                           placeholder="Enter E-mail"
                                          value={this.state.email}
                                          onChange={this.handleInputChange} />
                                      </div>
                                      <br></br>

                                      <div className="fd">
                                          <label>Password :</label>
                                          <input type="pwd"
                                           name="pwd" 
                                           className="form-control"
                                           placeholder="Enter Password"
                                           value={this.state.pwd}
                                          onChange={this.handleInputChange}/>
                                      </div>
                                      <br></br>

                                      <div className="fd">
                                            <label>Membership Type :</label>
                                            <input type="text"
                                             name="mtype" 
                                             className="form-control"
                                             placeholder="Ex:Silver"
                                             value={this.state.mtype}
                                            onChange={this.handleInputChange}/>
                                        </div>
                                        <br></br>

                                        <div className="button fd">
                                        <input type="submit"  value="Update"/>  
                                        </div>

        </form>
   
                            </div>
    
                            <div className="col-lg-3"></div>
    
                        </div>
    
                
      
    );
  }
}

export default EditMember;