import React from 'react';

const EmptyState = ({ message, icon }) => {
    return (
        <div className="empty-state">
            {icon && <div className="icon">{icon}</div>}
            <p>{message}</p>
        </div>
    );
};

export default EmptyState;
