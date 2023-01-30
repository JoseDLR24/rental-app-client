import Main from "./pages/main";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Application from "./pages/application";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/app" element={<Application />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
