import axios from "axios-jsonp-pro";

export default axios.create({
  baseURL: "http://0.0.0.0:3001/api",
  headers: {
    "Content-type": "application/json"
  }
});