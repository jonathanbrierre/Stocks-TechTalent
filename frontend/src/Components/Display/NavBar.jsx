import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../../Actions/userActions'

class NavBar extends Component {

    handleOnClick = () => {
        localStorage.clear()
        this.props.logOut()
    }

    render() {
        return (
            <div style = {{width: '50%', textAlign: 'center'}}>
                <span>Hello {this.props.user.name} </span><br></br>
                <Link to = '/transactions'>Your Transactions</Link> | <Link to ='/search'>Ticker Search</Link> | <Link to = '/portfolio'>Your Portfolio</Link> | <Link  to ='/' onClick = {this.handleOnClick}>Log Out</Link>
                <br></br>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        user: state.userManager.userObj
    }
}

export default connect(mapStateToProps, {logOut})(NavBar)
