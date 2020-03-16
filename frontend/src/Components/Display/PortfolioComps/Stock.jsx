import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Stock extends Component {
    render() {
        console.log(this.props.stock)
        return (
            <div>
                <p> {this.props.stock.symbol} - {this.props.stock.quantity} shares ${this.props.stock.latestPrice}</p>
                <hr></hr>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Stock)
