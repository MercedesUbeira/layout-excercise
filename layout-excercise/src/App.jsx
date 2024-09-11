import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import GameCard from "./components/gamecard";
import CatapultsGame from "./components/CatapultsGame";
import GameAttribute from "./components/GameAttribute";

function App() {
  return (
    <div className="appCss">
      <GameCard/>
      <CatapultsGame/>
    </div>
  );
}

export default App;
