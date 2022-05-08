import { useEffect, useState } from "react";
import Head from "next/head";
import { CharacterList } from "../components/Characters/CharactersList";
import { Header } from "../components/Header";

export default function Home() {
  const [characters, setCharacters] = useState({});
  const [planets, setPlanets] = useState({});
  const [filterCharacters, setFilterCharacter] = useState({});

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Header charData={characters} setFilter={setFilterCharacter} />
        <CharacterList
          charData={filterCharacters}
          setCharacters={setCharacters}
          planetData={planets}
          setPlanets={setPlanets}
        />
      </div>
    </>
  );
}
