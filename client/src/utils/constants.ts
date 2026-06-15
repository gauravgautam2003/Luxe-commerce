export const APP_NAME = 'E-Commerce';
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
export const ITEMS_PER_PAGE = 12;
export const SORT_OPTIONS = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
];
