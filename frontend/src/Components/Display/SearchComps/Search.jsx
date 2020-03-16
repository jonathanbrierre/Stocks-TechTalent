import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import TickerSearch from './TickerSearch'
import Result from './Result'
import NavBar from '../NavBar'
class Search extends Component {

    state = {
        stock: {}
    }

    componentWillUnmount(){
        this.setState({stock: {}})
    }

    getStock = (stock) => {
        this.setState({stock})
    }

    render() {
        
        return (
            <div>
                <NavBar/>
                <br></br>
                <div style = {{paddingLeft: '5vw'}}>
                    <h3>Your Cash: <span style = {{color: 'green'}}>${this.props.user.cash ? (this.props.user.cash).toFixed(2):null}</span></h3>
                    <br></br>
                    <TickerSearch getStock = {this.getStock}/>
                    {this.state.stock.symbol ? <Result stock = {this.state.stock}/> : null} 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userManager.userObj
    }
}

export default connect(mapStateToProps)(Search)
