import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Tạo một instance của axios
const apiClient = axios.create({
  baseURL: "http://192.168.9.205:3000",
  headers: {
    "Content-Type": "application/json"
  }
});

// Interceptor thêm token xác thực
apiClient.interceptors.request.use(function (config) {
  const token = AsyncStorage.getItem("token"); // Lấy token từ AsyncStorage
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

// Interceptor xử lý lỗi chung
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("error", error.response.status); // Xử lý lỗi 401
    }
    return Promise.reject(error);
  }
);

// Hàm tiện ích cho GET request
export const get = async (endpoint: string, data: any) => {
  console.log("endpoint", endpoint, data);
  try {
    const response = await apiClient.get(endpoint, { data });
    return response.data;
  } catch (error) {
    throw new Error("Failed to make GET request");
  }
};

// Hàm tiện ích cho POST request
export const post = async (endpoint: string, data: any) => {
  console.log("endpoint", endpoint, data);
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to make POST request");
  }
};

// Hàm tiện ích cho PUT request
export const put = async (endpoint: string, data: any) => {
  console.log("endpoint", endpoint, data);
  try {
    const response = await apiClient.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to make PUT request");
  }
};

// Hàm tiện ích cho DELETE request
// export const del = (path) => apiClient.delete(path);
export const del = async (endpoint: string) => {
  console.log("endpoint", endpoint);
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    throw new Error("Failed to make DELETE request");
  }
};

export default {
  get,
  post,
  put,
  del
};
