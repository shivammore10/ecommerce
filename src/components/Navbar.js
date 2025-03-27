import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <nav className={`navbar navbar-dark bg-dark ${!isAuthenticated ? "fixed-top" : "mb-2 p-2"}`}>
            <Link className="navbar-brand p-3" to="/">E-Commerce</Link>
            <div>
                {isAuthenticated && (
                    <>
                        <Link className="btn btn-light mx-2" to="/tasks">Tasks</Link>
                        <Link className="btn btn-light mx-2" to="/products">Products</Link>
                        <Link className="btn btn-light mx-2" to="/cart">Cart</Link>
                        <button className="btn btn-danger" onClick={() => dispatch(logout())}>Logout</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
