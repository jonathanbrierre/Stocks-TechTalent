import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, Button} from 'semantic-ui-react'

class Login extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Input type = 'text' placeholder = 'email'/>
                    <Form.Input type= 'submit'/>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
