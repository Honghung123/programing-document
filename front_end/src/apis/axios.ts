import axios from "axios";  

const removeTokens = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("backend-at-token");
};

const myAxios = axios.create({
  baseURL: import.meta.env.BACKEND_URL,
  validateStatus: () => true
});
// Add a request interceptor
myAxios.interceptors.request.use((config) => {
  config.headers = config.headers || {}; 
  return config;
});
// Add a response interceptor
myAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.status === 401) {
      removeTokens();
    }
    return Promise.reject(error);
  }
);
 
export { myAxios };