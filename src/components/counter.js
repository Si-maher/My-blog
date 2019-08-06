import React, { useState } from 'react';

const counter = () => {
    console.log(useState())
    const [count, setCount] = useState(0)

    return (
        <div className="counter">
            <h3>likes: {count}</h3>
            <button onClick={()=> setCount(count +1)}>👍🏻</button>
        </div>
    );
};

export default counter;