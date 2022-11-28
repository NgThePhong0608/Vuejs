import axios from "axios";
import { authHeaders } from "../utils/auth";

// set up default config for http requests
const http = axios.create({
	baseURL: process.env.VUE_APP_BASE_API_URL,
});

// add a request interceptor
http.interceptors.request.use(
	(config) => {
		config.headers = authHeaders();
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// add a response interceptor
http.interceptors.response.use(
	(response) => {
		return response?.data;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default http; //import global in main.js
