import axios from "axios";

const url = "http://localhost:8000/api";
let token = "3A32PAS5uXUoHBjQVhLs";

export const link = axios.create({
  baseURL: url,
  headers: {
    api_token: token,
  },
});
