import axios from "axios";
const BASE_URL= import.meta.env.VITE_API_URL || window.location.origin 

export default axios.create({
    baseURL:BASE_URL,
    withCredentials:true
})