import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, Button} from 'semantic-ui-react'
import {authenticateUser} from '../../Actions/userActions'
import {withRouter} from 'react-router-dom'
import Swal from 'sweetalert2'


const realUrl = 'https://fierce-shore-17893.herokuapp.com/https://tech-talent-stocks.herokuapp.com/login'
const testUrl = 'http://localhost:3000/login'
class Login extends Component {

    
    state = {
        email: '',
        password: ''
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleOnSubmit = e => {
        e.preventDefault()
        fetch(realUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            if(data.user){
                Swal.fire({icon: 'success', text:'Successfully Log In'})
                this.props.authenticateUser(data)
                localStorage.setItem('token', data.jwt)
                this.props.history.push('/dashboard')
            }else {
                // Swal.fire({icon: 'error', text: data.message.join('. ')})
                Swal.fire({icon: 'error', text: data.message})
            }
        })

    }

    render() {
        return (
            <div>
                <h4>Log In</h4>
                <Form onSubmit = {this.handleOnSubmit}>
                    <Form.Input type = 'text' placeholder = 'email' name = 'email' value = {this.state.email} onChange = {this.handleOnChange}/>
                    <Form.Input type = 'password' placeholder = 'password' name = 'password' value = {this.state.password} onChange = {this.handleOnChange}/>
                    <Button type= 'submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}


export default connect(null, {authenticateUser})(withRouter(Login))
