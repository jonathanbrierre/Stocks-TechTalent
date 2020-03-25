import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {updateUser} from '../../../Actions/userActions'
import {Form, Button} from 'semantic-ui-react'
import Swal from 'sweetalert2'

class Result extends Component {
    state = {
        quantity: ''
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleOnClick = (e) =>{
        if(this.state.quantity <= 0){
            Swal.fire({icon: 'error', text: 'Please put a valid quantity'})
            return
        }

        if(this.props.user.cash > (this.props.stock.latestPrice * this.state.quantity).toFixed(2)){
            fetch(`https://fierce-shore-17893.herokuapp.com/https://tech-talent-stocks.herokuapp.com/buy`,{
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
            .then(resp => resp.json())
            .then(user =>{
                console.log(user)
                this.props.updateUser(user)
                Swal.fire({icon: 'success', text: 'Successfully bough stock!'})
            })
        }else {
            Swal.fire({icon: 'error', text: 'Price per quantity exceeds available balance. Buy less.'})
        }
    }

    render() {
        // console.log(this.props.stock)
        return (
            <div>
                <p>{this.props.stock.symbol} </p>
                <p>{this.props.stock.companyName} </p>
                <p>Price: ${this.props.stock.latestPrice}</p>
                <p>Price per Quantity: ${(this.props.stock.latestPrice * this.state.quantity).toFixed(2)}</p>
                <Form.Input type= 'number' onChange = {this.handleOnChange} value = {this.state.quantity} name = 'quantity' placeholder = 'Quantity'/>
                <br></br>
                <Button onClick = {this.handleOnClick}>Buy Stock</Button>
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

export default connect(mapStateToProps,{updateUser})(Result)
