import { useEffect } from "react";
import "./App.css";
import Banner from "./sections/Banner";
import About from "./sections/About";
import HowToBuy from "./sections/HowToBuy";
import Slippage from "./sections/Slippage";
import Tokenomic from "./sections/Tokenomic";
import Roadmap from "./sections/Roadmap";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
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
