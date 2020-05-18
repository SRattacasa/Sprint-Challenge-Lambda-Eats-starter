import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as yup from "yup"; 
import axios from 'axios'


// Validation Logic for the following form
const formSchema = yup.object().shape({
    name: yup.string().min(2).required("Name requires at least two characters"),
    size: yup.string(),
    pepperoni: yup.boolean(),
    instructions: yup.string()
  });

const Pizza = (props) => {
    const [formState, setformState] = useState({
        name: "",
        pepperoni: false,
        size: "",
        instructions: "",
      });
    
      const [errorState, seterrorState] = useState({
        name: "",
        pepperoni: "",
        size: "",
        instructions: "",
      });
      const [userState, setuserState] = useState([])

      const formSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        axios.post('https://reqres.in/api/users', formState)
        .then(response => {console.log(response.data)
            })
        .catch(error => {console.log(error)})
      };
    
      const inputChange = (e) => {
        e.persist();
        validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setformState({ ...formState, [e.target.name]: value });
      };


      const validate = (e) => {  
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then((valid) => {
            seterrorState({
              ...errorState,
              [e.target.name]: "",
            });
          })
          .catch((err) => {
            console.log(err.errors);
            seterrorState({ ...errorState, [e.target.name]: err.errors[0] });
          });
      };
    return (
    <div className="pizza">
        
      <h1> 
          <Link to="/">Homepage</Link>
      </h1>
      <h1>Pizza Order Form</h1>
  
      <form onSubmit={formSubmit}>
        <label htmlFor="ordername">Name for the Order
            <input type="text" name="name" onChange={inputChange} value={formState.name} />
            {errorState.name.length > 0 ? (
            <p>{errorState.name} </p>
          ) : null}
        </label>
        <select name="size" value={formState.size} onChange={inputChange}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Extra Large</option>
        </select>
  
        
        <label htmlFor="pepperoni">Pepperoni
        <input type="checkbox" name="pepperoni" checked={formState.pepperoni} onChange={inputChange}/>
        </label>
        <label htmlFor="sausage">Sausage
        <input type="checkbox" name="sasuage" value={formState.toppings} /></label>
        <label htmlFor="pineapple">Pineapple
        <input type="checkbox" name="pineapple" value={formState.toppings} /></label>
  
  
        <input type="text" name="instructions" value={formState.instructions} onChange={inputChange}/>
        
        <label htmlFor="AddToOrder">Add To Order
        <input type="submit" name="submit" />
        </label>
  
        
      </form>
    </div>
    )
  };


export default Pizza;