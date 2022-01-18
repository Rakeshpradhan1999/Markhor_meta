import "./App.css";
import Banner from "./sections/Banner";
import About from "./sections/About";
import HowToBuy from "./sections/HowToBuy";
import Slippage from "./sections/Slippage";
import Tokenomic from "./sections/Tokenomic";
import Roadmap from "./sections/Roadmap";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <HowToBuy />
      <Slippage />
      <Tokenomic />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
