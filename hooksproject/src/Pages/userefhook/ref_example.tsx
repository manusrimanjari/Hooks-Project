import React, { useRef } from "react";

const UseRefDemo: React.FC = () =>{
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleLogin = () => {
        const username = usernameRef.current?.value;
        alert(`Welcome, ${username}!`);
    };

    return (
        <div className="container">
            <div className="example-container">
            <div className="login-container">
            <h1>Login Form</h1>
            <div className="input-container">
                <input
                    ref={usernameRef}
                    type="text"
                    placeholder="Username"
                    className="input-field"
                />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    className="input-field"
                />
            </div>
            <button onClick={handleLogin} className="login-button">
                Login
            </button>
        </div>
    </div>
        <div className="content-section">
            <h3>useRef Hook</h3>
            <p>useRef is used to store references to DOM elements.It allows direct DOM manipulation
               without triggering a re-render, making it efficient. useState, on the other hand, would require
               state variables to manage input values, leading to unnecessary re-renders.</p>
        </div>
    </div>
);
};

export default UseRefDemo;

//using usestate for form input causes the form to be re-rendered on every keystroke. 
//useRef is used to avoid this problem. It is a reference to the DOM node.
//useRef is used to access the DOM node directly.  
//the component does not re-render when the current value of the references changes when you access or update usernameRef.current
// React does not re-render the component.