import { Routes, Route } from 'react-router-dom';

const AdminRoute = () => {
    return (
        <Routes>
            <Route path="/admin" element={<div>Protected Route</div>} />
        </Routes>
    )
}

export default AdminRoute