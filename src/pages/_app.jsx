import { CharacterList } from "../components/Characters/CharactersList";
import "../styles/globals.css";

function MyApp() {
  return (
    <div className="container mx-auto">
      <h1>Star Wars wiki</h1>
      <CharacterList />
    </div>
  );
}

export default MyApp;
