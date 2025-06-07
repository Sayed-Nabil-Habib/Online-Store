import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <>
            <ScrollToTop /> {/* ✅ Renders Scroll-to-top logic */}
            <Layout cartCount={cart.length}>
                <Routes>
                    <Route path="/" element={<HomePage addToCart={addToCart} />} />
                    <Route path="/all-products" element={<AllProducts addToCart={addToCart} />} />
                    <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
                    <Route path="/cart" element={<CartPage cart={cart} />} />
                    <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
                    <Route path="/checkout-success" element={<CheckoutSuccessPage clearCart={clearCart} />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
