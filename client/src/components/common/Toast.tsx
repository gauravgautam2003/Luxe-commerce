import React from 'react';

const Toast = ({ message, type, onClose }) => {
    return (
        <div className={`toast toast-${type}`}>
            <p>{message}</p>
            <button onClick={onClose}>×</button>
        </div>
    );
};

export default Toast;
