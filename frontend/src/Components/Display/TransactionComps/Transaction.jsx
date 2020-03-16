import React, { Component } from 'react'


class Transaction extends Component {
    render() {
        // console.log(this.props.transaction)
        return (
            <div style = {{width: '40vw'}}>
                <p> Buy ({this.props.transaction.symbol}) - {this.props.transaction.quantity} shares  @ {this.props.transaction.latestPrice}</p>
                <hr></hr>
            </div>
        )
    }
}

export default Transaction
