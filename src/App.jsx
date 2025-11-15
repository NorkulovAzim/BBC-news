import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DetailedPage from "./pages/DetailedPage";
import SavedPage from "./pages/SavedPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:id" element={<DetailedPage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Route>
    </Routes>
  );
};

export default App;
