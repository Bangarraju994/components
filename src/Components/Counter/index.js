import { Component } from "react";

class Counter extends Component{

    state = {count: 0}

    onIncrease = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

    onDecrease = () => {
        this.setState((prevState) => ({count: prevState.count - 1}))
    }

    onReset = () => {
        this.setState({count: 0})
    }

    render(){
    
    const divStyle = {textAlign: 'center'}

    const counterParagraphStyle = { color: 'red', fontSize: '50px', textAlign: 'center', fontWeight: 'Bold' };
    
    const buttonStyles = {color: 'green', height: '25px', width: '90px', margin: '20px', textAlign: 'center' }

    const {count} = this.state


        return(
            <div style={divStyle} >
                <h1> Counter </h1>
                <div>
                <p style={counterParagraphStyle} > {count} </p>
                </div>
                <div >
                    <button style={buttonStyles} onClick={this.onDecrease}> Decrease </button>
                    <button style={buttonStyles} onClick={this.onReset}> Reset </button>
                    <button style={buttonStyles} onClick={this.onIncrease}> Increase  </button>
                </div>
            </div>
        )
    
    }
}

export default Counter;