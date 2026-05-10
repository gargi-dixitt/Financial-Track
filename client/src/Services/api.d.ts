export {};
declare global {
  interface Window {}
}

interface ApiResponse<T = any> {
  data: T
  status: number
  message?: string
}

export const api = {
  get: async <T = any>(url: string): Promise<ApiResponse<T>> => ({ 
    data: {} as T,
    status: 200 
  }),
  post: async <T = any>(url: string, data: any): Promise<ApiResponse<T>> => ({ 
    data: {} as T,
    status: 200 
  }),
  put: async <T = any>(url: string, data: any): Promise<ApiResponse<T>> => ({ 
    data: {} as T,
    status: 200 
  }),
  delete: async <T = any>(url: string): Promise<ApiResponse<T>> => ({ 
    data: {} as T,
    status: 200 
  }),
};

export default api;
