import api from './api';

const paymentService = {
    processPayment: (data) => api.post('/payments/process', data),
    verifyPayment: (id) => api.get(`/payments/${id}/verify`),
    getPaymentMethods: () => api.get('/payments/methods'),
};

export default paymentService;
