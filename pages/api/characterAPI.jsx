import axios from "axios";
import cheerio from "cheerio";
import image from "../../assets/undefined.png";

const SWAPI_BASE_URL = "https://swapi.dev/api";
const SWAPI_PEOPLE_URL = (page) => `${SWAPI_BASE_URL}/people?page=${page}`;
const WOOKIEEPEDIA_URL = (name) =>
  `https://starwars.fandom.com/api.php?action=opensearch&limit=1&search=${name}`;

export const dataFetch = async (url) =>
  axios.get(url).then((response) => response.data);

const getCharacters = async () => {
  const characterPromises = [];

  const { count, results: characters } = await dataFetch(SWAPI_PEOPLE_URL(1));
  let pages = Math.ceil(count / characters.length);

  while (pages > 1) {
    characterPromises.push(dataFetch(SWAPI_PEOPLE_URL(pages)));
    pages -= 1;
  }

  const moreCharacters = await Promise.all(characterPromises);
  return characters.concat(
    ...moreCharacters.map((response) => response.results)
  );
};

const getPlanets = async (characters) => {
  const planetMap = {};
  const planets = await Promise.all(
    Object.values(characters).map((character) => {
      if (!planetMap[character.homeworld]) {
        planetMap[character.homeworld] = true;
        return dataFetch(character.homeworld);
      }
      return undefined;
    })
  );

  return planets.filter((planet) => planet);
};

const addDescriptionAndImage = async (characters, planets) => {
  const [charactersWookiepedia, planetsWookiepedia] = await Promise.all([
    Promise.all(
      characters.map((character) => dataFetch(WOOKIEEPEDIA_URL(character.name)))
    ),
    Promise.all(
      planets.map((planet) => dataFetch(WOOKIEEPEDIA_URL(planet.name)))
    )
  ]);

  const [charactersHtml, planetsHtml] = await Promise.all([
    Promise.all(
      charactersWookiepedia.map((character) => dataFetch(character[3][0]))
    ),
    Promise.all(planetsWookiepedia.map((planet) => dataFetch(planet[3][0])))
  ]);

  const setInfo = (html, index, arr, link) => {
    const $ = cheerio.load(html, {
      xml: { normalizeWhitespace: true },
      xmlMode: true
    });
    const figure = $("figure").find("img")[0];
    // eslint-disable-next-line no-param-reassign
    arr[index].image = (figure && figure.attribs.src) || image;
    // eslint-disable-next-line no-param-reassign
    arr[index].description = $(
      "meta[name='twitter:description']"
    )[0].attribs.content;
    // eslint-disable-next-line no-param-reassign
    arr[index].readMore = link;
  };

  charactersHtml.forEach((html, index) =>
    setInfo(html, index, characters, charactersWookiepedia[index][3][0])
  );
  planetsHtml.forEach((html, index) =>
    setInfo(html, index, planets, planetsWookiepedia[index][3][0])
  );
};

export const getCharactersAndPlanets = async () => {
  const characters = await getCharacters();
  const planets = await getPlanets(characters);
  await addDescriptionAndImage(characters, planets);
  const characterMap = {};
  const planetMap = {};

  characters.forEach((character) => {
    characterMap[character.url] = character;
  });

  planets.forEach((planet) => {
    planetMap[planet.url] = planet;
  });

  return { characterMap, planetMap };
};
