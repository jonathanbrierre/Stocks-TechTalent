import React, { Component } from 'react'
import { connect } from 'react-redux'


class PortfolioContainer extends Component {



    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.userManager.token
})



export default connect(mapStateToProps)(PortfolioContainer)
