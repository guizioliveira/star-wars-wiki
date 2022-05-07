import { useState, useEffect } from "react";
import Image from "next/image";
import { height, mass, population, diameter } from "../Commons/Formaters";

export function CharactersDetails({ url, characters, planets }) {
  const [requestType, setRequestType] = useState(url);
  const [details, setDetails] = useState(characters[url]);
  const [related, setRelated] = useState([planets[details.homeworld]]);

  const isPerson = Boolean(requestType.includes("people"));

  function handleRequestType() {
    if (isPerson) {
      const charData = characters[requestType];
      setDetails(charData);
      setRelated([planets[charData.homeworld]]);
    } else {
      const planetData = planets[requestType];
      setDetails(planetData);
      setRelated(planetData.residents.map((resident) => characters[resident]));
    }
  }

  useEffect(() => {
    handleRequestType();
  }, [requestType]);

  return (
    <>
      <div className="md:py-20 md:px-14">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full h-64 bg-dark-700 rounded-t-lg details-image md:w-64 md:h-64 md:rounded-full">
            <div className="absolute w-full h-full top-0 md:top-0">
              <Image
                src={details.image}
                alt={`Image of ${details.name}`}
                layout="responsive"
                width={256}
                height={256}
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-4 p-6 md:p-0">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase">
              {details.name}
            </h2>
            {isPerson && (
              <div className="flex items-center gap-3">
                <span className="text-white uppercase font-extrabold text-sm md:text-base">
                  From
                </span>
                <button
                  onClick={() => setRequestType(details.homeworld)}
                  className="flex gap-2 items-center bg-primary-900 px-4 py-1 rounded-full text-sm tracking-wide text-white"
                >
                  <div className="relative w-5 h-5 rounded-full bg-dark-900">
                    <div className="absolute w-5 h-5">
                      <Image
                        className="rounded-full"
                        src={related[0].image}
                        alt={`Image of ${related[0].name}`}
                        priority
                        layout="fill"
                        objectFit="cover"
                        quality={50}
                      />
                    </div>
                  </div>
                  {related[0].name}
                </button>
              </div>
            )}
            <span className="line-clamp-4 md:line-clamp-5 text-white tracking-wide text-sm md:text-base">
              {details.description}
            </span>
            <a
              href={details.readMore}
              target="_blank"
              rel="noreferrer"
              className="bg-primary-500 w-full md:w-1/3 text-base text-center md:text-sm text-white py-3 md:py-1 rounded-lg hover:bg-primary-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
            >
              Read more
            </a>
          </div>
        </div>
        <div
          className={`flex w-full px-6 mb-6 flex-col gap-2 md:mb-0 md:mt-14 ${
            !isPerson ? "md:flex-col md:gap-4" : "md:flex-row md:gap-8"
          }`}
        >
          <div
            className={`flex items-center gap-2 ${isPerson && "md:flex-col"}`}
          >
            <span className="text-white font-extrabold tracking-widest uppercase text-sm md:text-base">
              {isPerson ? "Birth Year" : "Climate"}
            </span>
            <span className="text-white tracking-widest text-sm md:text-base">
              {isPerson ? details.birth_year : details.climate}
            </span>
          </div>
          <div
            className={`flex items-center gap-2 ${isPerson && "md:flex-col"}`}
          >
            <span className="text-white font-extrabold tracking-widest uppercase text-sm md:text-base">
              {isPerson ? "Height" : "Diameter"}
            </span>
            <span className="text-white tracking-widest text-sm md:text-base">
              {isPerson ? height(details.height) : diameter(details.diameter)}
            </span>
          </div>
          <div
            className={`flex items-center gap-2 ${isPerson && "md:flex-col"}`}
          >
            <span className="text-white font-extrabold tracking-widest uppercase text-sm md:text-base">
              {isPerson ? "Mass" : "Population"}
            </span>
            <span className="text-white tracking-widest text-sm md:text-base">
              {isPerson ? mass(details.mass) : population(details.population)}
            </span>
          </div>
          <div
            className={`flex items-center gap-2 ${
              isPerson ? "md:flex-col" : "flex-col"
            }`}
          >
            <span className="text-white w-full font-extrabold tracking-widest uppercase text-sm md:text-base">
              {isPerson ? "Homeworld" : "Residents"}
            </span>
            <div className="flex flex-wrap w-full gap-2">
              {related.map((data, index) => (
                <button
                  key={index}
                  onClick={() => setRequestType(data.url)}
                  className="flex gap-2 bg-primary-900 px-4 py-1 rounded-full tracking-wide text-white text-sm"
                >
                  <div className="relative w-5 h-5 rounded-full bg-dark-900">
                    <div className="absolute w-5 h-5">
                      <Image
                        className="rounded-full"
                        src={data.image}
                        alt={`Image of ${data.name}`}
                        priority
                        layout="fill"
                        objectFit="cover"
                        quality={50}
                      />
                    </div>
                  </div>
                  {data.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
