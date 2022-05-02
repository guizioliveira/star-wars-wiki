import axios from "axios";

export const dataFetch = async (url) =>
  axios.get(url).then((response) => response.data);
