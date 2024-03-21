import axios from "axios"

const instance = axios.create({
    baseURL : "http://localhost:3001/products",
    headers: {
        "Content-Type":"aplicatipn/json"
    },
    timeout: 3000,
})
export default instance;