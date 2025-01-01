import React, { useRef } from "react";

const UseRefDemo: React.FC = () =>{
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const errorMessageRef = useRef<HTMLParagraphElement>(null);

    const handleLogin = () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        // Simple validation
        if (!username) {
            errorMessageRef.current!.textContent = "Username is required.";
            usernameRef.current?.focus();
            return;
        }

        if (!password) {
            errorMessageRef.current!.textContent = "Password is required.";
            passwordRef.current?.focus();
            return;
        }

        // Clear the error message
        errorMessageRef.current!.textContent = "";

        // Simulate login logic
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
            <p ref={errorMessageRef} className="error-message"></p>
            <button onClick={handleLogin} className="login-button">
                Login
            </button>
        </div>
    </div>
        <div className="content-section">
            <p>Content goes here...</p>
        </div>
    </div>
);
};

export default UseRefDemo;