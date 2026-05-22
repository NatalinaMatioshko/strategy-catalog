import { BrowserRouter, Route, Routes } from "react-router-dom";
import StrategiesPage from "./pages/StrategiesPage";
import StrategyDetailsPage from "./pages/StrategyDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StrategiesPage />} />
        <Route path="/strategies/:id" element={<StrategyDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
