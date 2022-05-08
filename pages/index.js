import { useEffect, useState } from "react";
import Head from "next/head";
import { CharacterList } from "../components/Characters/CharactersList";
import { getCharactersAndPlanets } from "./api/characterAPI";
import { Header } from "../components/Header";

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
        <title>Star Wars wiki</title>
        <meta
          name="description"
          content="A wiki to learn more about characters and planets of the Star Wars world "
        />
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
