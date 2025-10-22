import { defineNuxtPlugin } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    timeout: 10000, // Set a timeout for requests
  })

  // Add a request interceptor
  apiClient.interceptors.request.use((config) => {
    // You can modify the request config here
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  // Add a response interceptor
  apiClient.interceptors.response.use((response) => {
    // You can modify the response data here
    return response
  }, (error) => {
    return Promise.reject(error)
  })

  // Inject the axios instance to the context as $axios
  nuxtApp.provide('axios', apiClient)
})