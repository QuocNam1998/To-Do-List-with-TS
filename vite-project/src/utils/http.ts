import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
const http = new Http().instance
http.interceptors.response.use(
  (config) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config
  },
  (err) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return err
  }
)
export default http
