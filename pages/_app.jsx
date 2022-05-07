import { useState } from "react";
import { CharacterList } from "../components/Characters/CharactersList";
import { Header } from "../components/Header";
import "../styles/globals.css";

function MyApp() {
  const [characters, setCharacters] = useState({});
  const [planets, setPlanets] = useState({});
  return (
    <div className="container mx-auto">
      <Header />
      <CharacterList
        charData={characters}
        setCharacters={setCharacters}
        planetData={planets}
        setPlanets={setPlanets}
      />
    </div>
  );
}

export default MyApp;
