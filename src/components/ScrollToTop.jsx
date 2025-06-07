import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="btn btn-primary position-fixed"
        style={{
          bottom: '40px',
          right: '40px',
          zIndex: 1000,
          borderRadius: '50%',
          padding: '10px 14px',
          fontSize: '18px',
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
}
