import axios from "axios";

const axiosClien = axios.create({
    baseURL: "http//127.0.0.1:800/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
}) 

export default axiosClien;