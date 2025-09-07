import axios from 'axios';
import { getAuthToken, handleLogout } from '@/lib/auth/utils';

const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      handleLogout();
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default api;

// API endpoints
const endpoints = {
  // Auth
  liffVerify: '/auth/liff/verify',
  adminLogin: '/auth/admin/login',
  
  // Bookings
  bookings: '/bookings',
  booking: (id: string) => `/bookings/${id}`,
  adminBookings: '/admin/bookings',
  adminBooking: (id: string) => `/admin/bookings/${id}`,
  
  // Services
  services: '/services',
  
  // PickupPoints
  pickupPoints: '/pickup-points',
  
  // Settings
  businessHours: '/settings/business-hours',
  closureDates: '/settings/closure-dates',
  
  // Stats
  adminStats: '/admin/stats',
} as const;

export { endpoints };
