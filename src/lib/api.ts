// API configuration for different environments
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// Debug log to verify which API URL is being used
console.log('API_BASE_URL:', API_BASE_URL);
console.log('Environment:', import.meta.env.MODE);

// Helper function to build API URLs
export const buildApiUrl = (endpoint: string): string => {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
};

// Common API endpoints
export const API_ENDPOINTS = {
  // User endpoints
  USER_CREATE: buildApiUrl('api/user/create/'),
  USER_VERIFY_EMAIL: buildApiUrl('api/user/verify-email/'),
  USER_RESEND_VERIFICATION: buildApiUrl('api/user/resend-verification-code/'),
  USER_LOGIN: buildApiUrl('api/token/'),
  USER_MERCHANT_PROFILE: buildApiUrl('api/user/merchant-profile/'),
  
  // Equipment endpoints
  EQUIPMENT_CREATE: buildApiUrl('api/gear-hub/gear-items/create'),
  GEAR_ITEMS: buildApiUrl('api/gear-hub/gear-items/'),
  GEAR_ITEM_DELETE: (id: number) => buildApiUrl(`api/gear-hub/gear-items/delete/${id}/`),
  GEAR_ITEM_TOGGLE: (id: number) => buildApiUrl(`api/gear-hub/gear-items/${id}/toggle-visibility/`),
} as const; 