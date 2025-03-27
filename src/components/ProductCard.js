import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{product?.name}</h5>
                    <p className="card-text">${product?.price}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => dispatch(addToCart(product))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;