import React,{ Component } from 'react';
import axios from 'axios';


class Home extends Component{
constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/member").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }
  });
}

onDelete=(id)=>{

  axios.delete(`http://localhost:8000/member/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){

  const result = posts.filter((post) =>
  post.name.toLowerCase().includes(searchKey)||
  post.address.includes(searchKey)
  
  )

  this.setState({posts:result})

}
handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/member").then(res =>{
    if(res.data.success){
     
        this.filterData(res.data.existingPosts,searchKey)
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

            <div className="sss">
            <input class="form-control" 
            type="search" 
            placeholder="Search"  
            aria-label="Search"
            onChange={this.handleSearchArea} />
            </div> 
          <p className="text-center fs-4 fw-bolder font-family:verdana">ALL MEMBERS DETAILS</p>

          <table  className="table table-success table-striped" style={{marginTop:'40px'}}>
                  
         <thead>
           <tr>
             <th scope="col">#</th>
        
             <th scope="col">Member ID</th>
             <th scope="col">Member Name</th>
             <th scope="col">E-mail</th>
             <th scope="col">Membership Type</th>
             <th scope="col">Action</th>
          </tr>
          </thead>

        <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{posts.memberid}</td>
                <td>
                  <a href={`/member/post/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.name}</a>

                  </td>
                  
                  <td>{posts.email}</td>
                  <td>{posts.mtype}</td>
                  <td>

                  <a className="btn btn-warning" href={`/member/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
                </tr>
            ))}

        </tbody>

       </table>
       <a href="/member/report">
       <button type="button" className="btn btn-primary" >Generate Report</button>
        </a>
     </div>
    );
  }
}

export default Home;
