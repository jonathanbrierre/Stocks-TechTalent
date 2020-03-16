import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Stock } from './Stock'
import NavBar from '../NavBar'


class PortfolioContainer extends Component {

    componentDidMount(){
        console.log(this.props.stocks)
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h2>Portfolio</h2>
                {this.props.stocks.map(stock => <Stock key = {stock.id} stock = {stock}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.userManager.token,
    stocks: state.userManager.stocks
})



export default connect(mapStateToProps)(PortfolioContainer)
