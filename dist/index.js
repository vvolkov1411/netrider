"use strict";
class JetFetch {
    static get(url, config = {}) {
        return JetFetch.request(url, Object.assign(Object.assign({}, config), { method: "GET" }));
    }
    static post(url, data, config = {}) {
        return JetFetch.request(url, Object.assign(Object.assign({}, config), { method: "POST", body: data }));
    }
    static put(url, data, config = {}) {
        return JetFetch.request(url, Object.assign(Object.assign({}, config), { method: "PUT", body: data }));
    }
    static delete(url, config = {}) {
        return JetFetch.request(url, Object.assign(Object.assign({}, config), { method: "DELETE" }));
    }
    static request(url, config) {
        return fetch(url, config).then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    }
}
