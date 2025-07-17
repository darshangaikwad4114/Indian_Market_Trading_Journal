import axios, { AxiosResponse } from 'axios';
import { 
  LoginCredentials, 
  RegisterCredentials, 
  AuthResponse, 
  ApiResponse,
  CreateTradeData,
  UpdateTradeData,
  TradeFilters,
  TradesResponse
} from '../types';

// Create axios instance
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authApi = {
  login: (credentials: LoginCredentials): Promise<AuthResponse> =>
    api.post('/auth/login', credentials).then((res: AxiosResponse<AuthResponse>) => res.data),
  
  register: (credentials: RegisterCredentials): Promise<AuthResponse> =>
    api.post('/auth/register', credentials).then((res: AxiosResponse<AuthResponse>) => res.data),
  
  getCurrentUser: (): Promise<ApiResponse> =>
    api.get('/auth/me').then((res: AxiosResponse<ApiResponse>) => res.data),
};

// Trade API
export const tradeApi = {
  getTrades: (filters?: TradeFilters): Promise<TradesResponse> => {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }
    return api.get(`/trades?${params.toString()}`).then((res: AxiosResponse<TradesResponse>) => res.data);
  },
  
  getTrade: (id: string): Promise<ApiResponse> =>
    api.get(`/trades/${id}`).then((res: AxiosResponse<ApiResponse>) => res.data),
  
  createTrade: (data: CreateTradeData): Promise<ApiResponse> =>
    api.post('/trades', data).then((res: AxiosResponse<ApiResponse>) => res.data),
  
  updateTrade: (id: string, data: UpdateTradeData): Promise<ApiResponse> =>
    api.put(`/trades/${id}`, data).then((res: AxiosResponse<ApiResponse>) => res.data),
  
  deleteTrade: (id: string): Promise<void> =>
    api.delete(`/trades/${id}`).then(() => {}),
};

export default api;
