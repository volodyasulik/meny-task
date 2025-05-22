import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error("[API Error]", error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export const apiGet = async <T = unknown>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await api.get<T>(url, config);
  return res.data;
};

export const apiPost = async <T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await api.post<T>(url, data, config);
  return res.data;
};

export const apiPut = async <T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await api.put<T>(url, data, config);
  return res.data;
};

export const apiDelete = async <T = unknown>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await api.delete<T>(url, config);
  return res.data;
};

export default api;
