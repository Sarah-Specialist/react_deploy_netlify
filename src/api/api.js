import axios from 'axios';

const API = axios.create({
    baseURL:"https://my-json-server.typicode.com/Sarah-Specialist/medication-api",
});
export default API