function batchInterceptor(instance) {
  instance.interceptors.request.use(request => {
    console.log('helo a request');
    return request;
  }, error => Promise.reject(error));
}

export default batchInterceptor;
