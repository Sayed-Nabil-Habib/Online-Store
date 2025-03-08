// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Header = ({ cartCount }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Online Store</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <CartIcon cartCount={cartCount} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
