import axios from "axios";

const host = "http://localhost:3001";
const apiClient = axios.create({
  baseURL: host,
});

export default apiClient;
