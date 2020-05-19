import React from "react";
import Pizza from './Pizza'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";


const App = () => {
  return (
    <Router>
      <div>
        
        
        <Route exact path="/pizza">
            <Pizza />
        </Route>
        <Route exact path="/">
            <Homepage />
        </Route>
      </div>
    </Router>
  );
};
export default App;
