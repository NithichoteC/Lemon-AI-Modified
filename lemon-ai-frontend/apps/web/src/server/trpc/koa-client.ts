import { API_BASE_URL } from '@lemonai/const';

interface KoaRequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: Record<string, any>;
  token?: string;
  headers?: Record<string, string>;
}

export class KoaClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async request<T = any>(
    endpoint: string,
    options: KoaRequestOptions
  ): Promise<T> {
    const { method, body, token, headers = {} } = options;

    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers,
    };

    if (token) {
      requestHeaders['Authorization'] = `Bearer ${token}`;
    }

    const requestOptions: RequestInit = {
      method,
      headers: requestHeaders,
    };

    if (body && method !== 'GET') {
      requestOptions.body = JSON.stringify(body);
    }

    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP ${response.status}: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(`KoaClient request error (${method} ${endpoint}):`, error);
      throw error;
    }
  }

  async get<T = any>(endpoint: string, token?: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', token });
  }

  async post<T = any>(
    endpoint: string,
    body: Record<string, any>,
    token?: string
  ): Promise<T> {
    return this.request<T>(endpoint, { method: 'POST', body, token });
  }

  async put<T = any>(
    endpoint: string,
    body: Record<string, any>,
    token?: string
  ): Promise<T> {
    return this.request<T>(endpoint, { method: 'PUT', body, token });
  }

  async delete<T = any>(endpoint: string, token?: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE', token });
  }
}

export const koaClient = new KoaClient();
