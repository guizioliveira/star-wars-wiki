import { useEffect, useState } from "react";
import "../styles/globals.css";
import { dataFetch } from "./api/characterAPI";

function MyApp() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    dataFetch("https://swapi.dev/api/people").then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <h1>Star Wars wiki</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {characters.results?.map((char, index) => (
          <div className="p-4" key={index}>
            <h2>{char.name}</h2>
            <span>
              {`${char.birth_year} · ${char.height}cm · ${char.mass}kg`}
            </span>
            <br />
            <span>{char.homeworld}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyApp;
