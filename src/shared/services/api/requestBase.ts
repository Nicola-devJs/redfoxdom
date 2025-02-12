import { ResponseBodyType } from "@/shared/types/response";

class RequestBaseApi {
  private BASE_URL = process.env.AUTH_URL;

  private async request(
    requestUrl: string,
    method: string,
    body?: BodyInit,
    requestSettings?: RequestInit,
  ) {
    try {
      const response = await fetch(`${this.BASE_URL}/api/${requestUrl}`, {
        method,
        body,
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
        ...requestSettings,
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  async get<T>(
    requestUrl: string,
    requestParams?: RequestInit,
  ): Promise<ResponseBodyType<T>> {
    try {
      const response = await this.request(
        requestUrl,
        "GET",
        undefined,
        requestParams,
      );
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  async post<T>(
    requestUrl: string,
    body: BodyInit,
    requestParams?: RequestInit,
  ): Promise<ResponseBodyType<T>> {
    try {
      const response = await this.request(
        requestUrl,
        "POST",
        body,
        requestParams,
      );
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  async put<T>(
    requestUrl: string,
    body: BodyInit,
    requestParams?: RequestInit,
  ): Promise<ResponseBodyType<T>> {
    try {
      const response = await this.request(
        requestUrl,
        "PUT",
        body,
        requestParams,
      );
      return response.json();
    } catch (error) {
      throw error;
    }
  }
  async delete<T>(
    requestUrl: string,
    requestParams?: RequestInit,
  ): Promise<ResponseBodyType<T>> {
    try {
      const response = await this.request(
        requestUrl,
        "DELETE",
        undefined,
        requestParams,
      );
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}

export const requsetBaseApi = new RequestBaseApi();
