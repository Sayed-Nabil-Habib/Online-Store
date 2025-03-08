import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductPage = ({ addToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
            const data = await response.json();
            setProduct(data.data);
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div className="text-center mt-5">Loading product...</div>;

    const discount = product.price - product.discountedPrice;
    const discountPercentage = Math.round((discount / product.price) * 100);

    return (
        <div className="container mt-5">
            <button className="btn btn-outline-secondary mb-3" onClick={() => navigate('/all-products')}>
                ← Back to All Products
            </button>

            <div className="row g-4 align-items-center">
                <div className="col-md-4 text-center">
                    <img 
                        src={product.image?.url} 
                        alt={product.image?.alt || product.title} 
                        className="img-fluid rounded shadow-sm w-50"
                    />
                </div>

                <div className="col-md-8">
                    <h1>{product.title}</h1>
                    <p className="text-muted mb-4">{product.description}</p>
                    <h3 className="text-danger">${product.discountedPrice.toFixed(2)}</h3>
                    {discount > 0 && (
                        <p className="text-success">
                            <s>${product.price.toFixed(2)}</s> - {discountPercentage}% off!
                        </p>
                    )}
                    <button className="btn btn-primary mt-3" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>

            <div className="mt-4">
                <h3 className="mb-3">Customer Reviews</h3>
                {product.reviews?.length > 0 ? (
                    <div className="list-group">
                        {product.reviews.map((review) => (
                            <div key={review.id} className="list-group-item border rounded mb-2 shadow-sm">
                                <h5>{review.username}</h5>
                                <p className="text-warning">⭐ {review.rating}/5</p>
                                <p>{review.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted">No reviews yet.</p>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
