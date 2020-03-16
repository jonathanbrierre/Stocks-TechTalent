import React, { Component } from 'react'
import { connect } from 'react-redux'

class Transaction extends Component {
    render() {
        console.log(this.props.transaction)
        return (
            <div style = {{width: '40vw'}}>
                <p> Buy ({this.props.transaction.symbol}) - {this.props.transaction.quantity} shares  @ {this.props.transaction.latestPrice}</p>
                <hr></hr>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
