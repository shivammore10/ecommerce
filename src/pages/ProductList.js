import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const products = useSelector(state => state.products.products);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div className="container">
            <h2>Product List</h2>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="row">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <div className="alert alert-warning">No products found.</div>
                )}
            </div>
        </div>
    );
};

export default ProductList;
