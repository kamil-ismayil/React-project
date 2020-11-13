import React, { Component, useContext } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Schedule from './Components/Schedule/Schedule';
import Training from './Container/Training/Training';
import Customer from './Container/Customer/Customer';

class App extends Component{

  render(){
      return(
        <div className="App">
          <BrowserRouter>
              <Switch>  
                  <Route path="/customer" component={Customer}/>
                  <Route path="/training" exact component={Training}/>
                  <Route path="/schedule" exact component={Schedule}/>    
                  <Route path="/" exact component={Login}/>    
              </Switch>
          </BrowserRouter> 
        </div>
      );
  }
}

export default App;
