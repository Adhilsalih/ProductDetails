export const BASE_URL = 'https://fakestoreapi.com';

export const ENDPOINTS = {
  allProducts: `${BASE_URL}/products`,
  productById: (id) => `${BASE_URL}/products/${id}`,
  categories: `${BASE_URL}/products/categories`,
  productsByCategory: (category) => `${BASE_URL}/products/category/${category}`,
};
