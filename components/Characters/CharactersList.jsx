import { useEffect } from "react";
import { Loading } from "../Loading";
import { getCharactersAndPlanets } from "../../pages/api/characterAPI";
import { CharactersCard } from "./CharactersCard";

export function CharacterList({
  charData,
  setCharacters,
  planetData,
  setPlanets
}) {
  useEffect(() => {
    getCharactersAndPlanets().then((data) => {
      setCharacters(data.characterMap);
      setPlanets(data.planetMap);
    });
  }, []);

  return (
    <>
      {Object.values(charData).length === 0 ? (
        <div className="pt-10">
          <Loading />
        </div>
      ) : (
        <div className="py-4 w-full grid grid-cols-2 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 xl:gap-9">
          {Object.values(charData)?.map((char, index) => (
            <CharactersCard
              key={index}
              url={char.url}
              characters={charData}
              planets={planetData}
            />
          ))}
        </div>
      )}
    </>
  );
}
