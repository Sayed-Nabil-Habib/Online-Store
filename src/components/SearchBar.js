import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="mb-4 text-center">
            <input
                type="text"
                className="form-control w-50 mx-auto"
                placeholder="Search for products.."
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
