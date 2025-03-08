import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ cart }) => {
    const navigate = useNavigate();

    const total = cart.reduce((acc, product) => acc + product.discountedPrice, 0).toFixed(2);

    return (
        <div className="container mt-5">
            <div className="card shadow-sm p-4">
                <h1 className="text-center mb-4">Checkout</h1>

                {cart.length > 0 ? (
                    <div>
                        <table className="table table-bordered table-striped align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product, index) => (
                                    <tr key={index}>
                                        <td className="text-center" style={{ width: '80px' }}>
                                            <img 
                                                src={product.image?.url} 
                                                alt={product.image?.alt || product.title} 
                                                className="img-thumbnail no-zoom"  
                                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                            />
                                        </td>
                                        <td>{product.title}</td>
                                        <td>${product.discountedPrice.toFixed(2)}</td>
                                        <td>1</td>
                                        <td>${product.discountedPrice.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <h3>Total: <span className="text-success">${total}</span></h3>
                            <button className="btn btn-primary btn-lg" onClick={() => navigate('/checkout-success')}>
                                Complete Purchase 
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-muted">Your cart is empty</p>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
