import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Dashboard extends Component {


    render() {
        return (
            <div>
                Hello {this.props.user.name} <br></br>
                What would you like to do today? <br></br>
                <Link to= '/search'> Search For Stock</Link> <br></br>
                <Link to = '/portfolio'> View Your Portfolio</Link> <br></br>
                <Link to = '/transactions'> View Your Past Transactions </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userManager.userObj
    }
}
    


const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
