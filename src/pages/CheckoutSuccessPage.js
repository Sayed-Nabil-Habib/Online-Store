import React, { useEffect } from 'react';

const CheckoutSuccessPage = ({ clearCart }) => {
    useEffect(() => {
        clearCart(); 
    }, [clearCart]);

    return (
        <div className="container mt-5 text-center">
            <h1>Thanks for your Order</h1>
            <p>Your order has been placed successfully.</p>
            
            <button 
                className="btn btn-primary mt-4"
                onClick={() => window.location.href = '/'}
            >
               To Home Page
            </button>
        </div>
    );
};

export default CheckoutSuccessPage;
