import React, { Component } from 'react'
import { connect } from 'react-redux'

class TickerSearch extends Component {
    state = {
        ticker: ''
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(`https://sandbox.iexapis.com/stable/stock/${this.state.ticker}/quote?token=Tsk_b531f7ca0a084372a434b5a3ec8fd4d7`)
        .then(resp => {
            if(resp.ok){
                return resp.json()
            }else{
                throw Error(resp.statusText);
            }
        })
        .then(data => {
            this.props.getStock(data)
        })
        .catch(error => {
            alert('Invalid Ticker Symbol')
        })
        
        this.setState({ticker: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleOnSubmit}>
                    <input type = 'text' placeholder = 'Input Ticker Symbol' name = 'ticker' onChange = {this.handleOnChange} value = {this.state.ticker}/>
                    <input type = 'submit'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TickerSearch)
