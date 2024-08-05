import React from 'react';

const WhiteButton = ({selected, onClick, children, className}) => (
    <button
        onClick={onClick}
        className={`transition ease-in-out border border-healix-btn-border rounded-full ${
            selected ? 'hover:bg-blue-700 bg-healix-blue text-white' : 'hover:bg-blue-300 bg-white text-black'
        } ${className || ''}`}
    >
        {children}
    </button>
);

export default WhiteButton;
