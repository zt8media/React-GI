import React, { useState } from 'react';

function Counter() {
  
    const [count, setCount] = useState(0);

    // Function to increment count
    const increment = () => {
        setCount(count + 1);
    };

 
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="Counter-container">
            <h3>{count}</h3> 
            <div className="buttons">
                <button onClick={increment}>+</button> 
                <button onClick={decrement}>-</button> 
            </div>
        </div>
    );
}

export default Counter;
