import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Software from "./pages/Software";
import Writing from "./pages/Writing";
import Electrical from "./pages/Electrical";
import Series from "./pages/Series";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/software/series/:slug" element={<Series />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/electrical" element={<Electrical />} />
      </Route>
    </Routes>
  );
}

export default App;
