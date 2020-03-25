import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Stock } from './Stock'
import NavBar from '../NavBar'
import ColorIndex from './ColorIndex'


class PortfolioContainer extends Component {

    render() {
        return (
            <div >
                <NavBar/>
                <h2>Portfolio</h2>
                <div style = {{paddingLeft: '5vw'}}>
                    {this.props.stocks.map(stock => <Stock key = {stock.id} stock = {stock}/>)}
                </div>
                <ColorIndex/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.userManager.token,
    stocks: state.userManager.stocks
})



export default connect(mapStateToProps)(PortfolioContainer)
