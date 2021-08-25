import axios from "axios";
import batchInterceptor from "./interceptor.js";

const createClient = (config) => {
  const instance = axios.create(config);
  instance.interceptors.request.use(batchInterceptor, Promise.reject);
  return instance;
}

export default createClient;
