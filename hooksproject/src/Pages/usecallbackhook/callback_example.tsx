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
           <h3>useCallback Hook</h3>
           <br />
           <p>useCallback Hook is used to memoize a function so that it is 
            not recreated unnecessarily during re-renders.</p>
        </div>
        </div>
        </>
    );
}
export default UseCallbackDemo;

// w/o use callback
// const UseCallbackDemo: React.FC = () =>{

//     const [count, setCount] = React.useState(0);
//     const [text, setText] = React.useState("");

//     const handleClick =  () => {
//         setCount((prev) => prev +1);
//     };

//     useEffect (() => {
//         console.log("handle click function changed");
//     }, [handleClick]); 

//     return (
//         <>
//         <div className="container">
//             <div className="example-section">
//         <h2>Count: {count}</h2>
//         <button onClick={handleClick}>Increment count</button>
//         <br />
//         <input type="text" value={text} 
//             onChange={(e) => setText(e.target.value)}
//             placeholder="type..." />
//         <h2>Text: {text}</h2>
//         </div>
//         <div className="content-section">
//            <h3>useCllback Hook</h3>
//            <br />
//            <p>useCallback Hook is used to memoize a function so that it is 
//             not recreated unnecessarily during re-renders.</p>
//         </div>
//         </div>
//         </>
//     );
// }
// export default UseCallbackDemo;

//when state changes, the function is recreated unnecessarily. to avoid rebuilding use callback.
//callback stores the function in the memory so it doesn't rebuild again. when state changes, it just returns the stored function.
