class JetFetch {
  static get(url: string, config: RequestInit = {}): Promise<any> {
    return JetFetch.request(url, { ...config, method: "GET" });
  }

  static post(url: string, data: any, config: RequestInit = {}): Promise<any> {
    return JetFetch.request(url, { ...config, method: "POST", body: data });
  }

  static put(url: string, data: any, config: RequestInit = {}): Promise<any> {
    return JetFetch.request(url, { ...config, method: "PUT", body: data });
  }

  static delete(url: string, config: RequestInit = {}): Promise<any> {
    return JetFetch.request(url, { ...config, method: "DELETE" });
  }

  static request(url: string, config: RequestInit): Promise<any> {
    return fetch(url, config).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}
