import { useEffect, useState } from "react";
import Head from "next/head";
import { CharacterList, Header } from "../components";
import { getCharactersAndPlanets } from "./api/characterAPI";

export async function getStaticProps() {
  const data = await getCharactersAndPlanets();
  return { props: { ...data } };
}

export default function Home({ characterMap, planetMap }) {
  const [characters] = useState(characterMap || {});
  const [planets] = useState(planetMap || {});
  const [filterCharacters, setFilterCharacter] = useState({});
  const [hasSearchData, setHasSearchData] = useState(true);

  useEffect(() => {
    setFilterCharacter(characters);
  }, [characters]);

  return (
    <>
      <Head>
        <title>Star Wars wiki | This is the way</title>
        <meta
          name="description"
          content="A wiki to learn more about characters and planets of the Star Wars world"
        />
        <meta property="og:title" content="Star Wars wiki" />
        <meta
          property="og:description"
          content="A wiki to learn more about characters and planets of the Star Wars world"
        />
        <meta property="og:url" content="https://star-wars-wiki.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Header
          charData={characters}
          setFilter={setFilterCharacter}
          setHasSearchData={setHasSearchData}
        />
        <CharacterList
          charData={filterCharacters}
          planetData={planets}
          hasSearchData={hasSearchData}
        />
      </div>
    </>
  );
}
