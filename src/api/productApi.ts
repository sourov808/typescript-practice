import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

const productApi = {
  getProducts: (page: number = 1, limit: number = 10) => {
    const skip = (page - 1) * limit;
    return api.get(`/products?limit=${limit}&skip=${skip}`);
  },

  searchProducts: (query: string, page: number = 1, limit: number = 10) => {
    const skip = (page - 1) * limit;
    return api.get(`/products/search?q=${query}&limit=${limit}&skip=${skip}`);
  },

  searchByCategory: (
    category: string,
    page: number = 1,
    limit: number = 10
  ) => {
    const skip = (page - 1) * limit;
    return api.get(
      `/products/category/${category}?limit=${limit}&skip=${skip}`
    );
  },
  getSingleProduct: (id: number) => api.get(`/products/${id}`),
};

export default productApi;
