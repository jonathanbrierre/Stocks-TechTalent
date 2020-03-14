import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Search extends Component {


    render() {
        return (
            <div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Search)
