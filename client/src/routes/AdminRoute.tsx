import React from 'react';

const AdminRoute = ({ children, isAdmin }) => {
    return isAdmin ? children : null;
};

export default AdminRoute;
