import axios, {type AxiosError} from "axios";
import type {ApiError} from "../types";

const APP_API_URL = import.meta.env.VITE_APP_API_URL;

const api = axios.create({
    baseURL: `${APP_API_URL}/api`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
        const apiError: ApiError = {
            message: (error.response?.data as ApiError)?.message || error.message,
            status: (error.response?.data as ApiError)?.status || error.response?.status || 500,
        };
        return Promise.reject(apiError)
    }
)

export default api;