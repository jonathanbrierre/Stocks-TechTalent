import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Result extends Component {
    state = {
        quantity: ''
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    
    handleOnClick = (e) =>{
        if(this.state.quantity <= 0){
            alert('Please put a valid quantity')
            return
        }

        if(this.props.user.cash > this.props.stock.latestPrice){
            fetch(`http://localhost:3000/buy`,{
                method: 'PATCH',
                headers:{
                    'Authorization': `bearer ${this.props.token}`,
                    'content-type': 'application/json',
                    accept: 'application/json'
                },
                body: JSON.stringify({
                    stock: this.props.stock,
                    quantity: this.state.quantity
                })
            })
        }
    }

    render() {
        console.log(this.props.stock)
        return (
            <div>
                <p>{this.props.stock.symbol} </p>
                <p>{this.props.stock.companyName} </p>
                <p>Price: ${this.props.stock.latestPrice}</p>
                <input type= 'number' onChange = {this.handleOnChange} value = {this.state.quantity} name = 'quantity' placeholder = 'Quanity'/>
                <button onClick = {this.handleOnClick}>Buy Stock</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userManager.userObj,
        token: state.userManager.token
    }
}
    


const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
