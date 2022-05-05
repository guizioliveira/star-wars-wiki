import { CharacterList } from "../components/Characters/CharactersList";
import { Header } from "../components/Header";
import "../styles/globals.css";

function MyApp() {
  return (
    <div className="container mx-auto">
      <Header />
      <CharacterList />
    </div>
  );
}

export default MyApp;
