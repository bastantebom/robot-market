import axios from "axios";

const domain = "http://localhost:8000";

const client = axios.create({
  baseURL: domain,
});

const Base = function (options) {
  const onSuccess = (response) => response.data;
  const onError = (error) => Promise.reject(error.response || error.message);

  return client(options).then(onSuccess).catch(onError);
};

export default Base;
