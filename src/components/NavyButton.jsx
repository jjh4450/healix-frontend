import React from 'react';

const NavyButton = ({ onClick, children, className, round}) => (
    <button
        onClick={onClick}
        className={`text-white transition bg-healix-navy ease-in-out text-xl lg:text-2xl rounded-${round || 'full'}  ${className || ''} `}
    >
        {children}
    </button>
);

export default NavyButton;
