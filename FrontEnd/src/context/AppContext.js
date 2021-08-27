
import http from "./http-common";

const getAll = () => {
  return http.get(`/`);
};

const findByTitle = (title, dato) => {
  return http.get(`/${title}?title=${dato}`);
};

export default {
  getAll,
  findByTitle
};


//https://api.mapbox.com/geocoding/v5/mapbox.places/${resource}.json?access_token=pk.eyJ1IjoiaGJhcnJpZXRhIiwiYSI6ImNrcWZsMzhpZDBuajIydm5uZHhwYmhnZXAifQ.NZh5mkEUbcfurI9ZrN5jCw&autocomplete=on&fuzzyMatch=on