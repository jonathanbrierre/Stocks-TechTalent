import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logOut} from '../../Actions/userActions'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

class Dashboard extends Component {

    handleOnClick = () => {
        localStorage.clear()
        this.props.logOut()
        Swal.fire({icon: 'success', text: 'Successful Log Out'})
    }

    render() {
        return (
            <div style = {{marginLeft: 'auto', marginRight:'auto', marginTop: '40vh', textAlign: 'center'}}>
                Hello {this.props.user.name} <br></br>
                What would you like to do today? <br></br>
                <Link to= '/search'> Search For Stock</Link> <br></br>
                <Link to = '/portfolio'> View Your Portfolio</Link> <br></br>
                <Link to = '/transactions'> View Your Past Transactions </Link> <br></br>
                <Link to = '/' onClick = {this.handleOnClick} >Log Out</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userManager.userObj
    }
}
    
export default connect(mapStateToProps, {logOut})(Dashboard)
