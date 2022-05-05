/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { getDataFromMultiplePagesAPI } from "../../pages/api/characterAPI";
import { CharactersCard } from "./CharactersCard";

export function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataFromMultiplePagesAPI().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <>
      {characters.length === 0 ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-4 xl:gap-9">
          {characters
            ?.sort((a, b) => a.name.localeCompare(b.name))
            .map((char, index) => (
              <CharactersCard key={index} details={char} />
            ))}
        </div>
      )}
    </>
  );
}
