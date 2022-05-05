import axios from "axios";

const SWAPI_BASE_URL = "https://swapi.dev/api";
const SWAPI_PEOPLE_URL = `${SWAPI_BASE_URL}/people?page=1`;

export const dataFetch = async (url) =>
  axios.get(url).then((response) => response.data);

export const getDataFromMultiplePagesAPI = async () => {
  let data = await dataFetch(SWAPI_PEOPLE_URL);
  const totalResults = [...data.results];

  while (data.next != null) {
    // eslint-disable-next-line no-await-in-loop
    data = await dataFetch(data.next);
    totalResults.push(...data.results);
  }

  return totalResults;
};
