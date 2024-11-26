class RequestBaseApi {
  private BASE_URL = process.env.AUTH_URL;

  private async request(requestUrl: string, method = "GET", body?: BodyInit) {
    const response = await fetch(`${this.BASE_URL}/api/${requestUrl}`, {
      method,
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }

  async get<T>(requestUrl: string): Promise<T> {
    try {
      const response = await this.request(requestUrl);
      return response.json() as T;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async post<T>(requestUrl: string, body: BodyInit): Promise<T> {
    try {
      const response = await this.request(requestUrl, "POST", body);
      return response.json() as T;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async put<T>(requestUrl: string, body: BodyInit): Promise<T> {
    try {
      const response = await this.request(requestUrl, "PUT", body);
      return response.json() as T;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async delete<T>(requestUrl: string): Promise<T> {
    try {
      const response = await this.request(requestUrl, "DELETE");
      return response.json() as T;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export const requsetBaseApi = new RequestBaseApi();
