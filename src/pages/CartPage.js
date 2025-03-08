import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart }) => {
    const navigate = useNavigate();

    const total = cart.reduce((acc, product) => acc + product.discountedPrice, 0).toFixed(2);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Your Cart</h1>
            {cart.length > 0 ? (
                <div className="row">
                    {cart.map((product, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="card h-100 shadow-sm text-center">
                                <img 
                                    src={product.image?.url} 
                                    alt={product.image?.alt || product.title} 
                                    className="card-img-top cart-image"  
                                    style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h6 className="card-title">{product.title}</h6>
                                    <p className="card-text">${product.discountedPrice.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">the cart is empty.</p>
            )}

            {cart.length > 0 && (
                <div className="text-center mt-4">
                    <h3>Total: <span className="text-success">${total}</span></h3>
                    <button className="btn btn-primary btn-lg" onClick={() => navigate('/checkout')}>
                        To Checkout 🛒
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
