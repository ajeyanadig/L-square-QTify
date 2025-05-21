import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Nabvar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero />
      </BrowserRouter>
    </div>
  );
}

export default App;
