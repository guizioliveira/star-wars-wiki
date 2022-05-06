import { useState } from "react";
import Image from "next/image";

import image from "../../assests/image3.jpg";
import { Popup } from "../Commons/Popup";
import { CharactersDetails } from "./CharactersDetails";

export function CharactersCard({ index, details }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const char = details;
  return (
    <>
      <button
        key={index}
        onClick={openModal}
        className="relative overflow-hidden h-44 rounded-3xl bg-dark-800 flex group transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-700"
      >
        <div className="flex flex-col items-start justify-end text-left gap-1 z-10 p-5 w-full h-full rounded-lg text-white card duration-300">
          <h2 className="font-bold text-sm sm:text-xl">{char.name}</h2>
          <span className="font-normal text-[.5rem] sm:text-xxs tracking-widest">{`${char.birth_year} · ${char.height}cm · ${char.mass}kg`}</span>
          <div className="bg-primary-900 tracking-widest rounded-md px-2 py-1 text-[.5rem] sm:text-xxs flex w-20 sm:w-24 justify-start">
            {char.planet.name}
          </div>
        </div>
        <div className="absolute w-2/3 h-full z-0 right-0 md:-right-4 group-hover:scale-110 group-focus-visible:scale-110 duration-300">
          <Image
            src={image}
            alt={`Image of ${char.name}`}
            priority
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </button>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
        <CharactersDetails details={char} />
      </Popup>
    </>
  );
}
