import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, cartCount }) => {
    return (
        <div id="root">
            <Header cartCount={cartCount} />
            <div className="main-content">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
