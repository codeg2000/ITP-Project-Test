import React, {useState,useEffect} from "react"
import axios from "axios";
import { Form,Button,Col,Row,InputGroup } from "react-bootstrap";


export default function AddItem(){
  const [validated, setValidated] = useState(false);


  const [ItemName, setItemName]= useState("");
  const [BrandName, setBrandName]= useState("");
  const [Category, setCategory]= useState("");
  const [QualityAssurance, setQualityAssurance]= useState("");
  const [UnitPrice, setUnitPrice]= useState("");
  const [UnitProfit, setUnitProfit]= useState("");


  const [AllCategory, setAllCategory] =useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:8000/category")
    .then(res => {
      if(res.data.success){
      
        setAllCategory(res.data.existingCategory)}})

    }   
  );

  function saveItem(e){
    
    const form = e.currentTarget;

    if (form.checkValidity() === false) {

    e.preventDefault();

    e.stopPropagation();

  }
    
    
    
    else{
    e.preventDefault();
    
    const newItem ={
      ItemName,
      BrandName,
      Category,
      QualityAssurance,
      UnitPrice,
      UnitProfit
    }

    axios.post("http://localhost:8000/item/save", newItem).then(()=>{
      alert("New Item Added")
      window.location.replace("/item")
      
      
    }).catch((err=>{
      alert(err)
    })

  )
  }
  setValidated(true);
 }


    return(
            <div className="container1">
              <div class="topnav">
                <a class="active" href="/">Home</a>
                    <a  href="/item">Dashboard</a>
                    <a href="/item/add_item">Add Item</a>
                    <a href="/item/categories">Categories</a>
                    <a href="/item/add_category">Add Category</a>
                </div>
            <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">Add New Item</h2>
            <div className="additm">



            <Form noValidate validated={validated} onSubmit={saveItem}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Item Name </label>
                <input type="text" required minLength="2"
                className="form-control"
                placeholder="Enter Item Name"
                id="ItemName"
                onChange={(e)=>{setItemName(e.target.value)}} />
                 <Form.Control.Feedback type="invalid">

                  Please provide a Item Name

                </Form.Control.Feedback>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Brand Name </label>
                <input type="text" required minLength="2"
                className="form-control"
                placeholder="Enter Brand Name"
                id="BrandName"
                onChange={(e)=>{setBrandName(e.target.value)}}  />
                <Form.Control.Feedback type="invalid">

                  Please provide a Brand Name

                  </Form.Control.Feedback>
            </div>


            <div>
                <label > Category</label>

                    <select className="form-select" aria-label="Default select example"
                    onChange={(e)=>{const selectedto = e.target.value; setCategory(selectedto)}} >
                    {AllCategory.map((allCategory) => (
                <option  value={allCategory.CategoryName} >{allCategory.CategoryName}</option>
                ))}

        </select>

        </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Quality Assurance </label>
                <input type="text" required 
                className="form-control"
                placeholder="Enter Quality Assurance"
                id="QualityAssurance"
                onChange={(e)=>{setQualityAssurance(e.target.value)}}  />
                <Form.Control.Feedback type="invalid">

Please provide a Quality Assurance

</Form.Control.Feedback>
            </div>
            
            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Unit Price </label>
                <input type="number" required
                className="form-control"
                placeholder="Enter Unit Price"
                id="UnitPrice"
                onChange={(e)=>{setUnitPrice(e.target.value)}}  />
                <Form.Control.Feedback type="invalid">

                Please provide a Unit Price

</Form.Control.Feedback>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Unit Profit </label>
                <input type="number" required
                className="form-control"
                placeholder="Enter Unit Profit"
                id="UnitProfit"
                onChange={(e)=>{setUnitProfit(e.target.value)}} />
                <Form.Control.Feedback type="invalid">

                Please provide a Unit Profit

                </Form.Control.Feedback>
            </div>

          
            <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} >
            <i className="far fa-check-square"></i>
            &nbsp; Save
            </button>
            </Form>
            </div>
            </div>
        </div>
    )
}
