import React from 'react';

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
}

export default Button;
