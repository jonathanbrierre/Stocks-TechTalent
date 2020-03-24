import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'
import Swal from 'sweetalert2'

class TickerSearch extends Component {
    state = {
        ticker: ''
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(`https://cloud.iexapis.com/stable/stock/${this.state.ticker}/quote?token=pk_ea86410582414536bef212f60b3d7975`)
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
            Swal.fire({icon: 'error', text: 'Invalid Ticker Symbol'})
        })

        this.setState({ticker: ''})
    }

    render() {
        return (
            <div style = {{width: '50%', textAlign: 'right'}}>
                <Form onSubmit = {this.handleOnSubmit}>
                    <Form.Input type = 'text' placeholder = 'Input Ticker Symbol' name = 'ticker' onChange = {this.handleOnChange} value = {this.state.ticker}/>
                    <Button type = 'submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}


export default TickerSearch
