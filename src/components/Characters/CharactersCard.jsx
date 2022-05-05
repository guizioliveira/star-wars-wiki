/* eslint-disable import/prefer-default-export */
export function CharactersCard({ index, details }) {
  const char = details;
  return (
    <div className="p-4 h-44" key={index}>
      <div className="flex flex-col">
        <h2>{char.name}</h2>
        <span>{`${char.birth_year} · ${char.height}cm · ${char.mass}kg`}</span>
        <span>{char.homeworld}</span>
      </div>
    </div>
  );
}
