import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'https:localhost:4040/api/v1/', 
  timeout: 1000, 
});

export default axiosInstance