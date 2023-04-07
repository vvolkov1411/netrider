declare class JetFetch {
    static get(url: string, config?: RequestInit): Promise<any>;
    static post(url: string, data: any, config?: RequestInit): Promise<any>;
    static put(url: string, data: any, config?: RequestInit): Promise<any>;
    static delete(url: string, config?: RequestInit): Promise<any>;
    static request(url: string, config: RequestInit): Promise<any>;
}
