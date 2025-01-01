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
        <h1>useCallback Demo page</h1>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment count</button>
        <br />
        <input type="text" value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="type..." />
        <p>Text: {text}</p>
        </>
    );
};

export default UseCallbackDemo;
