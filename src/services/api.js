import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:3334"
})

export const api2 = axios.create({
    baseURL: "http://localhost:3001"
})


