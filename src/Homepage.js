import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Homepage = () => {
    return (
    <div >
      <h1>Homepage</h1>
      <h2>
          <Link to="/pizza"> Pizza Form </Link>
      </h2>
  
    </div>
    )
  };


export default Homepage;