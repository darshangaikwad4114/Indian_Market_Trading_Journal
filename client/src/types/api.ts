export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any[];
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface ApiError {
  success: false;
  message: string;
  errors?: any[];
}
