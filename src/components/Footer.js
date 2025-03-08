// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5 mt-5">
            <div className="container text-center text-lg-start">
                <div className="row">
                    
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase font-weight-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white text-decoration-none footer-link">Home</a></li>
                            <li><a href="/all-products" className="text-white text-decoration-none footer-link">All Products</a></li>
                            <li><a href="/contact" className="text-white text-decoration-none footer-link">Contact Us</a></li>
                            <li><a href="/cart" className="text-white text-decoration-none footer-link">View Cart</a></li>
                        </ul>
                    </div>
                    
                   
                </div>

                
            </div>
        </footer>
    );
};

export default Footer;
