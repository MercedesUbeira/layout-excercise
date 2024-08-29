import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="appCss">
      <Navigation />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
