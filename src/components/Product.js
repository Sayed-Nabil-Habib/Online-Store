import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, addToCart }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow-sm">
                <img 
                    src={product.image?.url} 
                    className="card-img-top product-image" 
                    alt={product.image?.alt || product.title} 
                />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-danger">${product.discountedPrice.toFixed(2)}</p>
                    <div className="d-flex justify-content-start gap-2">
                        <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">
                            show Product
                        </Link>
                        <button 
                            className="btn btn-success btn-sm" 
                            onClick={() => addToCart(product)}
                        >
                            Add to  shopping Cart 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
