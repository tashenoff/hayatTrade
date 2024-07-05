// components/PageButton.js
import React from 'react';

const PageButton = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border px-4 py-2 rounded ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
    >
      {children}
    </button>
  );
};

export default PageButton;
