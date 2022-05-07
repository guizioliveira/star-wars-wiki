import { useState } from "react";
import Image from "next/image";

import { Popup } from "../Commons/Popup";
import { CharactersDetails } from "./CharactersDetails";
import { height, mass, concatInfo } from "../Commons/Formaters";

export function CharactersCard({ url, characters, planets }) {
  const [isOpen, setIsOpen] = useState(false);
  const char = characters[url];
  const planet = planets[char.homeworld];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative overflow-hidden h-44 md:h-52 rounded-3xl bg-primary-900 flex group transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-700"
      >
        <div className="flex flex-col items-start justify-end text-left gap-2 z-10 p-5 w-full h-full rounded-lg text-white card duration-300">
          <h2 className="font-bold text-sm sm:text-xl">{char.name}</h2>
          <span className="font-normal text-[.5rem] sm:text-xxs tracking-widest">
            {concatInfo([
              char.birth_year,
              height(char.height),
              mass(char.mass)
            ])}
          </span>
          <div className=" bg-primary-900 tracking-widest rounded-md px-2 py-1 text-[.5rem] sm:text-xxs flex items-center gap-2 min-w-[50px] justify-start">
            <div className="relative w-4 h-4 rounded-full bg-dark-900">
              <div className="absolute w-4 h-4">
                <Image
                  className="rounded-full"
                  src={planet.image}
                  alt={`Image of ${planet.name}`}
                  priority
                  layout="fill"
                  objectFit="cover"
                  quality={50}
                />
              </div>
            </div>
            {planet.name}
          </div>
        </div>
        <div className="absolute w-2/3 h-full z-0 right-0 md:-right-4 group-hover:scale-110 group-focus-visible:scale-110 duration-300">
          <Image
            src={char.image}
            alt={`Image of ${char.name}`}
            priority
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </button>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
        <CharactersDetails
          url={url}
          characters={characters}
          planets={planets}
        />
      </Popup>
    </>
  );
}
