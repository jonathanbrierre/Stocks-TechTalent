import React, { Component } from 'react'
export class Stock extends Component {

    state = {
        color: ''
    }
    componentDidMount(){
        fetch(`https://cloud.iexapis.com/stable/stock/${this.props.stock.symbol}/quote?token=pk_ea86410582414536bef212f60b3d7975`)
        .then(resp => resp.json())
        .then(data =>{
            if(data.open === this.props.stock.latestPrice || data.open === null){
                this.setState({color: 'grey'})
            }else if(data.open > this.props.stock.latestPrice){
                this.setState({color: 'red'})
            } else if (data.open < this.props.stock.latestPrice){
                this.setState({color: 'green'})
            }
        })
    }


    render() {
        // console.log(this.props.stock)
        return (
            <div style = {{width: '40vw'}}>
                <p> <span style = {{color: this.state.color}}>{this.props.stock.symbol}</span> - {this.props.stock.quantity} shares at <span style = {{color: this.state.color}}>${this.props.stock.latestPrice}</span></p>
                <hr></hr>
            </div>
        )
    }
}


export default Stock
