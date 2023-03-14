import Main from "./pages/main";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Application from "./pages/application";
import Example from "./pages/example";
import Scrapper from "./pages/scrapper";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/app" element={<Application />} />
        <Route path="/oe" element={<Example />} />
        <Route path="*" element={<Navigate to="/main" />} />
        <Route path="/scrapper" element={<Scrapper/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
