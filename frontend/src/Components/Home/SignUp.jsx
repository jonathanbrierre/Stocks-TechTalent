import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, Button} from 'semantic-ui-react'
import {authenticateUser} from '../../Actions/userActions'
import {withRouter} from 'react-router-dom'
import Swal from 'sweetalert2'

class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        fetch(`https://tech-talent-stocks.herokuapp.com/signup`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(data =>{
            if(data.user){
                Swal.fire({icon: 'success', text:'Successfully Joined'})
                localStorage.setItem('token', data.jwt)
                this.props.authenticateUser(data)
                this.props.history.push('/dashboard')
            }else {
                Swal.fire({icon: 'error', text: data.message.join(', ')})
            }
            this.setState({
                name: '',
                password: '',
                email: ''
            })
        })
    }

    render() {
        return (
            <div>
                <h4>Sign Up</h4>
                <Form onSubmit = {this.handleOnSubmit}>
                    <Form.Input type = 'text' placeholder = 'name' value = {this.state.name} name = 'name' onChange = {this.handleOnChange}/>
                    <Form.Input type = 'text' placeholder = 'email' value = {this.state.email} name = 'email' onChange = {this.handleOnChange}/>
                    <Form.Input type = 'password' placeholder = 'password' value = {this.state.password} name = 'password' onChange = {this.handleOnChange}/>
                    <Button type= 'submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}



export default connect(null, {authenticateUser})(withRouter(SignUp))
