import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        setError("");
        if (!email || !password || !confirmPassword) {
            setError("Please fill all fields!");
            return;
        } else if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        } else if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        } else {
            const users = JSON.parse(localStorage.getItem("users")) || [];

            if (users.some(user => user.email === email)) {
                setError("Email is already registered.");
                return;
            } else {
                const newUser = { email, password };
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                const userCarts = JSON.parse(localStorage.getItem("userCarts")) || {};
                userCarts[email] = [];
                localStorage.setItem("userCarts", JSON.stringify(userCarts));
                alert("Registration successful! Please login.");
                navigate("/login");
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center exclude-navbar" style={{ height: "80vh" }}>
            <div className="card p-4 shadow" style={{ width: "350px" }}>
                <h3 className="text-center">Register</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter your email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Enter your password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Enter confirm password"
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
                <p className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
