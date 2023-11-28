import { Component } from "react";

class Counter extends Component{
    render(){
    const divStyle = {textAlign: 'center'}

    const counterParagraphStyle = { color: 'red', fontSize: '50px', textAlign: 'center', fontWeight: 'Bold' };
    
    const buttonStyles = {backgroundColor: 'white', color: 'green', height: '25px', width: '90px', margin: '20px', textAlign: 'center' }

        return(
            <div style={divStyle} >
                <h1> Counter </h1>
                <div>
                    <p style={counterParagraphStyle} > 0 </p>
                </div>
                <div >
                    <button style={buttonStyles}> Increase </button>
                    <button style={buttonStyles}> Decrease </button>
                </div>
            </div>
        )
    
    }
}

export default Counter;