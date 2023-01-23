import axios from "axios";

export const api = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=8000",
  timeout: 5000,
});
