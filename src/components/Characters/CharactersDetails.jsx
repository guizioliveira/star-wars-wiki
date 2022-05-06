import Image from "next/image";
import image from "../../assests/image3.jpg";

export function CharactersDetails({ details }) {
  return (
    <>
      <div className="md:py-20 md:px-14">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full h-64 rounded-t-lg details-image md:w-64 md:h-64 md:rounded-full">
            <div className="absolute w-full h-full -top-1/2 md:top-0">
              <Image
                src={image}
                alt={`Image of ${details.name}`}
                layout="responsive"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-4 p-6 md:p-0">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase">
              {details.name}
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-white uppercase font-extrabold text-sm md:text-base">
                From
              </span>
              <div className="bg-primary-900 px-4 py-1 rounded-full text-sm tracking-wide text-white">
                {details.planet.name}
              </div>
            </div>
            <span className="line-clamp-4 md:line-clamp-5 text-white tracking-wide text-sm md:text-base">
              Anakin Skywalker was a human male Jedi Knight of the Galactic
              Republic and the prophesied Chosen One of the Jedi Order, destined
              to bring balance to the Force. Also known as “Ani” during his
              childhood, Skywalker. Also known as “Ani” during his childhood,
              Skywalker
            </span>
            <button className="bg-primary-500 w-full md:w-1/3 text-base md:text-sm text-white py-3 md:py-1 rounded-lg hover:bg-primary-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900">
              Read more
            </button>
          </div>
        </div>
        <div className="flex w-full px-6 mb-6 flex-col gap-2 md:flex-row md:gap-8 md:mb-0 md:mt-14">
          <div className="flex items-center gap-2 md:flex-col">
            <span className="text-white font-extrabold tracking-widest uppercase text-sm md:text-base">
              Birth Year
            </span>
            <span className="text-white tracking-widest text-sm md:text-base">
              {details.birth_year}
            </span>
          </div>
          <div className="flex items-center gap-2 md:flex-col">
            <span className="text-white font-extrabold tracking-widest uppercase text-sm md:text-base">
              Height
            </span>
            <span className="text-white tracking-widest text-sm md:text-base">{`${details.height}cm`}</span>
          </div>
          <div className="flex items-center gap-2 md:flex-col">
            <span className="text-white font-extrabold tracking-widest uppercase text-sm md:text-base">
              Mass
            </span>
            <span className="text-white tracking-widest text-sm md:text-base">{`${details.mass}kg`}</span>
          </div>
          <div className="flex items-center gap-2 md:flex-col">
            <span className="text-white font-extrabold tracking-widest uppercase text-sm md:text-base">
              Homeworld
            </span>
            <span className="bg-primary-900 px-4 py-1 rounded-full tracking-wide text-white text-sm">
              {details.planet.name}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
