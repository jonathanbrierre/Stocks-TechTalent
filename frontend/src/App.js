import React from 'react';
import './App.css';
import Home from './Components/Home/Home';

import {Switch, Route, withRouter} from 'react-router-dom'

import {connect} from 'react-redux'
import {authenticateUser} from './Actions/userActions'
class App extends React.Component{

  componentDidMount(){
    if(localStorage.getItem('token')){
        let token = localStorage.getItem('token')
        fetch('http://localhost:3000/persist',{
            headers: {
                'Authorization': `bearer  ${token}`
            }
        })
        .then(r => r.json())
        .then(data => {
            if(data.jwt){
                localStorage.setItem('token', data.jwt)
                this.props.authenticateUser(data)
            }
        })
      }
}

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

export default connect(null, {authenticateUser})(App);
