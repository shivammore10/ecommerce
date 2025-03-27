import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskList from "./pages/TaskList";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import "./App.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/tasks" element={<PrivateRoute><TaskList /></PrivateRoute>} />
                <Route path="/products" element={<PrivateRoute><ProductList /></PrivateRoute>} />
                <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
