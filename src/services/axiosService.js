import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL})

const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWVkMzRmN2JhMTc5MzgzYTBmZjBkZGU5NmFlOWI2MCI' +
    'sInN1YiI6IjYzZjIxMWYyMTUzNzZjMDA4MzM2NjE4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xsqAfVnQxlYiR5cCuZ341k' +
    'IcBybgHFTrBhsyVzWq6J0'
axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${access}`
    return config
})

export {
    axiosService
}