import { useEffect, useState } from "react";
import { CharacterList } from "../components/Characters/CharactersList";
import { Header } from "../components/Header";
import "../styles/globals.css";

function MyApp() {
  const [characters, setCharacters] = useState({});
  const [planets, setPlanets] = useState({});
  const [filterCharacters, setFilterCharacter] = useState({});

  useEffect(() => {
    setFilterCharacter(characters);
  }, [characters]);

  return (
    <div className="container mx-auto">
      <Header charData={characters} setFilter={setFilterCharacter} />
      <CharacterList
        charData={filterCharacters}
        setCharacters={setCharacters}
        planetData={planets}
        setPlanets={setPlanets}
      />
    </div>
  );
}

export default MyApp;
