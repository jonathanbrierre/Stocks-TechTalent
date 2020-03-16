import React, { Component } from 'react'
import { connect } from 'react-redux'
import Transaction from './Transaction'
import NavBar from '../NavBar'


class TransactionContainer extends Component {

    componentDidMount(){
        console.log(this.props.transactions)
    }

    render() {
        return (
            <div style = {{paddingLeft: '5vw'}}>
                <NavBar/>
                <h2>Transactions</h2>
                {this.props.transactions.map(transaction => <Transaction key = {transaction.id} transaction = {transaction}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.userManager.token,
    transactions: state.userManager.transactions
})



export default connect(mapStateToProps)(TransactionContainer)
