import Image from "next/image";

import image from "../../assests/image.png";

/* eslint-disable import/prefer-default-export */
export function CharactersCard({ index, details }) {
  const char = details;
  return (
    <div
      key={index}
      className="relative overflow-hidden h-44 rounded-3xl bg-dark-800 flex group transition-all"
    >
      <div className="flex flex-col justify-end gap-1 z-10 p-5 w-full h-full rounded-lg text-white card duration-300">
        <h2 className="font-bold text-xl">{char.name}</h2>
        <span className="font-normal text-xxs tracking-widest">{`${char.birth_year} · ${char.height}cm · ${char.mass}kg`}</span>
        <div className="bg-dark-700 tracking-widest rounded-md px-2 py-1 text-xxs flex w-24 justify-start">
          Planet Name
          {/* {char.homeworld} */}
        </div>
      </div>
      <div className="absolute z-0 top-0 right-0 group-hover:scale-110 duration-300">
        <Image
          src={image}
          alt={`Image of ${char.name}`}
          priority
          unsized="true"
        />
      </div>
    </div>
  );
}
