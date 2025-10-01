import React, { useState } from 'react';
import '../App.css';

function SearchFilter({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (onSearch) onSearch(value);
    };

    return (
        <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">User Management</h1>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search by name or email…"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-white shadow-sm
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-all duration-300 ease-in-out"
                />
                <svg
                    className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
            </div>
        </div>
    );
}

export default SearchFilter;