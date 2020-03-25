import React from 'react';
import './App.css';
import Home from './Components/Home/Home';

import {Switch, Route, withRouter} from 'react-router-dom'

import {connect} from 'react-redux'
import {authenticateUser} from './Actions/userActions'
import Dashboard from './Components/Display/Dashboard';
import Search from './Components/Display/SearchComps/Search'
import PortfolioContainer from './Components/Display/PortfolioComps/PortfolioContainer';
import TransactionContainer from './Components/Display/TransactionComps/TransactionContainer';

class App extends React.Component{

  componentDidMount(){
    
    if(localStorage.getItem('token')){
        let token = localStorage.getItem('token')
        fetch('https://tech-talent-stocks.herokuapp.com/persist',{
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

  landingPage = () => {
    let token = localStorage.getItem('token')
    if(token){
      return <Dashboard/>
    }else{
      return <Home/>
    }
  }

    render(){
      console.log();
      
      return (
      <div className="App">
        <Switch>
          <Route exact path = '/' render ={this.landingPage} />
          <Route exact path = '/dashboard' render ={() => <Dashboard/>} />
          <Route exact path = '/search' render ={() => <Search/>} />
          <Route exact path = '/portfolio' render ={() => <PortfolioContainer/>} />
          <Route exact path = '/transactions' render ={() => <TransactionContainer/>} />
        </Switch>
      </div>
    )
  }
}

export default connect(null, {authenticateUser})(App);
