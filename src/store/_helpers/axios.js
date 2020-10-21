import axios from "axios";
import { actSpinner } from "../";
import validatedResponse, { messageHttpError } from './axiosValidator';
// import adapter from 'axios/lib/adapters/http';

// axios.defaults.adapter = adapter; //require ('axios/lib/adapters/http');

//todo: put the global request headers for endpoint calls here
axios.defaults.headers.common = {
  "Content-Type": "application/json"
};

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    actSpinner(true);
    return config;
  } /*, function (error) { 
    // Do something with request error
    return Promise.reject(error);
  }*/
);

// Add a response interceptor
axios.interceptors.response.use(
  function (res) {
    actSpinner(false);
    return validatedResponse(res); //return response or Promise.reject
  }, function (error) {
    actSpinner(false);
    messageHttpError(error);
    return Promise.reject(error);
  }
);

export default axios;