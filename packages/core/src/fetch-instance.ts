import { fetchExtended } from './fetch'

interface FetchApiInstance {
  post<T>(url: string, body?: any): Promise<T>
  get<T>(url: string, body: any): Promise<T>
}

const fetchApiInstance: FetchApiInstance = {
  post: function <T>(url: string, body?: any): Promise<T> {
    return fetchExtended()(url, { method: 'POST', body })
  },
  get: function <T>(url: string, body: any): Promise<T> {
    return fetchExtended()(url, { method: 'GET', body })
  },
}

export { fetchApiInstance }
