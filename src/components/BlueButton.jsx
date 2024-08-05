import React from 'react';

const BlueButton = ({selected, onClick, children, className, round}) => (
    <button
        onClick={onClick}
        className={`transition ease-in-out border border-healix-btn-border text-xl lg:text-2xl rounded-${round || 'full'} text-white ${
            selected ? 'hover:bg-blue-700 bg-healix-blue' : 'hover:bg-blue-300 bg-healix-skyblue'
        } ${className || ''} `}
    >
        {children}
    </button>
);

export default BlueButton;
