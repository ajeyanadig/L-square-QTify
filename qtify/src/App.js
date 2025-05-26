import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Nabvar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Section />
      </BrowserRouter>
    </div>
  );
}

export default App;
