import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateMessageComponent from './components/CreateMessageComponent'
import ListMessageComponent from './components/ListMessageComponent'

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                         
                    <Route path = "/" exact component = {ListMessageComponent}></Route>
                          
                          <Route path = "/add-message" component = {CreateMessageComponent}></Route>
                          
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;