/* eslint-disable import/prefer-default-export */
import { useEffect } from "react";
import { Loading } from "../Loading";
import { getDataFromMultiplePagesAPI } from "../../pages/api/characterAPI";
import { CharactersCard } from "./CharactersCard";

export function CharacterList({ charData, setCharacters }) {
  useEffect(() => {
    getDataFromMultiplePagesAPI().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <>
      {charData.length === 0 ? (
        <div className="pt-10">
          <Loading />
        </div>
      ) : (
        <div className="py-4 w-full grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 xl:gap-9">
          {charData
            ?.sort((a, b) => a.name.localeCompare(b.name))
            .map((char, index) => (
              <CharactersCard key={index} details={char} />
            ))}
        </div>
      )}
    </>
  );
}
