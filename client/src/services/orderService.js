import api from './api';

const orderService = {
    getAllOrders: (params) => api.get('/orders', { params }),
    getOrderById: (id) => api.get(`/orders/${id}`),
    createOrder: (data) => api.post('/orders', data),
    updateOrder: (id, data) => api.put(`/orders/${id}`, data),
    trackOrder: (id) => api.get(`/orders/${id}/track`),
};

export default orderService;
