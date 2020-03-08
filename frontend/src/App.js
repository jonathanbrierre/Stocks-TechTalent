import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {Switch, Route, withRouter} from 'react-router-dom'

class App extends React.Component{

    render(){
      return (
      <div className="App">
        <Switch>
          <Route exact path = '/' render ={() => <Home/>} />
        </Switch>
      </div>
    )
  }
}

export default App;
