import React, { useCallback, useEffect } from "react";

const UseCallbackDemo: React.FC = () =>{

    const [count, setCount] = React.useState(0);
    const [text, setText] = React.useState("");

    const handleClick = useCallback (() => {
        setCount((prev) => prev +1);
    },[]);

    useEffect (() => {
        console.log("handle click function changed");
    }, [handleClick]); 

    return (
        <>
        <div className="container">
            <div className="example-section">
        <h2>Count: {count}</h2>
        <button onClick={handleClick}>Increment count</button>
        <br />
        <input type="text" value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="type..." />
        <h2>Text: {text}</h2>
        </div>
        <div className="content-section">
            <p> UseCallback example it is a hook</p>
        </div>
        </div>
        </>
    );
};

export default UseCallbackDemo;
