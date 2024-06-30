import React, { useState } from "react"; 
import '../index.css';

const Calculator = () => {   
    // calculation logic here 

    const [data, setData] = useState("");

    const getValue = (event) => {
        const value = event.target.value;
        
        if (value === "AC") {
            setData("");
        } else if (value === "Back") {
            setData(data.slice(0, -1));
        } else if (value === "=") {
            try {
                setData(eval(data).toString());
            } catch {
                setData("Error");
            }
        } else {
            setData(data + value);
        }
    } 

//  for user press any key from it's keybord 

    const handleChange = (event) => {
        setData(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            evaluateExpression();
        }
    }

    const evaluateExpression = () => {
        try {
            setData(eval(data).toString());
        } catch {
            setData("Error");
        }
    }

     return (   
        // this ui part
        <>
            <div className="container">
                <div>
                    <input  
                     placeholder="0" 
                     value={data} 
                     onChange={handleChange} 
                     onKeyPress={handleKeyPress} 
                    />
                </div>
                <br />
                <button onClick={getValue} value="(">(</button>
                <button onClick={getValue} value=")">)</button>
                <button onClick={getValue} value="%">%</button>
                <button onClick={getValue} value="AC" className="operation">AC</button>
                <button onClick={getValue} value="7">7</button>
                <button onClick={getValue} value="8">8</button>
                <button onClick={getValue} value="9">9</button>
                <button onClick={getValue} value="*" className="operation">*</button>
                <button onClick={getValue} value="4">4</button>
                <button onClick={getValue} value="5">5</button>
                <button onClick={getValue} value="6">6</button>
                <button onClick={getValue} value="-" className="operation">-</button>
                <button onClick={getValue} value="1">1</button>
                <button onClick={getValue} value="2">2</button>
                <button onClick={getValue} value="3">3</button>
                <button onClick={getValue} value="+" className="operation">+</button> 
                <button onClick={getValue} value="0">0</button>
                <button onClick={getValue} value="Back">Back</button>
                <button onClick={getValue} value="=" className="equal">=</button>
                <button onClick={getValue} value="/" className="operation">/</button>
            </div>
        </>
    );
}

export default Calculator;
