
import https from "./http-common";

const getAll = () => {
  return https.get(`/history`);
};

const findByTitle = ( dato) => {
  return https.get(`/?city=${dato}`);
};

export default {
  getAll,
  findByTitle
};

