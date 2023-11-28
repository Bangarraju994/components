import { Component } from "react";

class Counter extends Component{
    render(){
    const counterParagraphStyle = { color: 'red', fontSize: '50px', textAlign: 'center', fontWeight: 'Bold' };
    

        return(
            <div >
                <h1> Counter </h1>
                <div>
                    <p style={counterParagraphStyle} > 0 </p>
                </div>
                <div>
                    <button> Increase </button>
                    <button> Decrease </button>
                </div>
            </div>
        )
    
    }
}

export default Counter;