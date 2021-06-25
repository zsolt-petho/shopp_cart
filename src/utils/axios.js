import axios from "axios";

const instance = axios.create({
  baseURL: "https://20fb262250f6.ngrok.io/",
  timeout: 3000,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.data?.message) {
      return Promise.reject(new Error(error.response.data.message));
    }

    return Promise.reject(error);
  }
);

export default instance;
