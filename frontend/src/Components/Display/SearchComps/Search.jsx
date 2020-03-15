import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import TickerSearch from './TickerSearch'
import Result from './Result'
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
                Your Cash: {this.props.user.cash}
                <br></br>
                <TickerSearch getStock = {this.getStock}/>
                {this.state.stock.symbol ? <Result stock = {this.state.stock}/> : null} 
                 <Link to = '/dashboard'> Back to Dashboard </Link>
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
