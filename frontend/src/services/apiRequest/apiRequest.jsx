import axios from "axios";

const apiRequest = (url, setState) => {
  axios
    .get(`${url}`)
    .then((response) => response.data)
    .then((data) => {
      setState(data);
    });
};

export default apiRequest;
