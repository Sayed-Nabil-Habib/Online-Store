import React, { useEffect, useState } from 'react';
import Product from '../components/Product';

const AllProducts = ({ addToCart }) => {  
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://v2.api.noroff.dev/online-shop');
                const data = await response.json();
                if (Array.isArray(data.data)) {
                    setProducts(data.data);
                } else {
                    console.error('API response is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">All Products</h1>
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => (
                        <Product key={product.id} product={product} addToCart={addToCart} />  
                    ))
                ) : (
                    <p className="text-center">Loading products, please wait..</p>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
