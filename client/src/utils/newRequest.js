import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiver-backend.vercel.app/api",
  withCredentials: true,
});


export default newRequest;