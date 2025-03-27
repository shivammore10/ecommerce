import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/slices/cartSlice";

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="container">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <div className="alert alert-info">Your cart is empty.</div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <button 
                                            className="btn btn-sm btn-secondary mx-1"
                                            onClick={() => dispatch(decreaseQuantity(item.id))}
                                        >
                                            -
                                        </button>
                                        {item.quantity}
                                        <button 
                                            className="btn btn-sm btn-secondary mx-1"
                                            onClick={() => dispatch(increaseQuantity(item.id))}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button 
                                            className="btn btn-danger btn-sm"
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {cart.length > 0 && (
                <div className="d-flex justify-content-between align-items-center">
                    <h4>Total: ${totalPrice.toFixed(2)}</h4>
                    <button className="btn btn-success">Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
