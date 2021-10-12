import React,{ Component } from 'react';
import axios from 'axios';


class MemberDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

componentDidMount(){
    const id=this.props.match.params.id;
    axios.get(`http://localhost:8000/member/post/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                post:res.data.post
            });
            console.log(this.state.post);
        
        }
    });
}

  render(){

    const {name,address,phone,email,pwd,mtype}=this.state.post;

    return(
        <div className="containerx">
        <div class="topnav">
            <a class="active" href="/">DashBoard</a>
            <a  href="/member/add">Add Member</a>
          
         </div>
    <div className="uiz">
    <h4>{'Member Details'}</h4>
    <hr/>
        <table class="table table-success table-striped">
            <dl className="row">
                
                <dt className="col-sm-3 text-left">Name</dt>
                <dd className="col-sm-9">{name}</dd>
       
                <dt className="col-sm-3 text-left">Address</dt>
                <dd className="col-sm-9">{address}</dd>               
        
                <dt className="col-sm-3 text-left">Phone</dt>
                <dd className="col-sm-9">{phone}</dd>
                
                <dt className="col-sm-3 text-left">E-mail</dt>
                <dd className="col-sm-9">{email}</dd>
                
                <dt className="col-sm-3 text-left">Password</dt>
                <dd className="col-sm-9">{pwd}</dd>

                <dt className="col-sm-3 text-left">Membership Type</dt>
                <dd className="col-sm-9">{mtype}</dd>

            </dl>
        </table>
        <a href="/">
             <button type="cancel" className="btn btn-primary btn-block" style={{marginLeft:'0px'}} >
             <i class="fas fa-arrow-alt-circle-left"></i>
            &nbsp; DashBoard
             </button>
        </a>

    </div>
        
       
      </div>
     
      
    );
  }
}
export default MemberDetails;