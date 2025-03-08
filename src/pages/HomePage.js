import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product';
import SearchBar from '../components/SearchBar';

const HomePage = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://v2.api.noroff.dev/online-shop');
                const data = await response.json();
                if (Array.isArray(data.data)) {
                    setProducts(data.data);
                    setFilteredProducts(data.data.slice(0, 8)); 
                } else {
                    console.error('API response is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleSearch = (query) => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered.slice(0, 8)); 
    };

    return (
        <div className="container mt-5">
            {/* Header Section */}
            <div className="text-center mb-5">
                <h1 className="display-4 text-primary font-weight-bold">Search for proudcts</h1>
                <p className="lead text-muted"></p>
            </div>

            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />

            {/* Product Grid */}
            <div className="row g-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Product key={product.id} product={product} addToCart={addToCart} />
                    ))
                ) : (
                    <p className="text-center text-muted">No products found</p>
                )}
            </div>

            {/* View All Products Button */}
            <div className="text-center mt-5">
                <button 
                    className="btn btn-lg btn-outline-primary rounded-pill" 
                    onClick={() => navigate('/all-products')}
                    style={{ fontSize: '1.1rem', padding: '10px 30px' }}
                >
                    Explore More Products
                </button>
            </div>
        </div>
    );
};

export default HomePage;
