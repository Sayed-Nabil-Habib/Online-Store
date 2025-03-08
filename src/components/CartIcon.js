import React from 'react';
import { Link } from 'react-router-dom';

const CartIcon = ({ cartCount }) => {
    return (
        <Link to="/cart" className="btn btn-outline-light position-relative">
             Cart
            {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                </span>
            )}
        </Link>
    );
};

export default CartIcon;
