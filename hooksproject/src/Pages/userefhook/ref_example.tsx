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
        <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
            <h1>Login Form</h1>
            <div style={{ marginBottom: "20px" }}>
                <input
                    ref={usernameRef}
                    type="text"
                    placeholder="Username"
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "10px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                />
            </div>
            <p
                ref={errorMessageRef}
                style={{ color: "red", marginBottom: "20px", fontSize: "14px" }}
            ></p>
            <button
                onClick={handleLogin}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Login
            </button>
        </div>
    );
};

export default UseRefDemo;