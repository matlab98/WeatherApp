import axios from "axios-jsonp-pro";

export default axios.create({
  baseURL: "http://0.0.0.0:44320/api",
  headers: {
    "Content-type": "application/json"
  }
});