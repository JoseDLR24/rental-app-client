import Main from "./pages/main";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Scraper from "./pages/scraper";
import HowToUse from "./pages/howtouse/howtouse";
import About from "./pages/about/about";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/scraper" element={<Scraper/>} />
        <Route path="/how-to-use" element={<HowToUse/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
