import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Software from "./pages/Software";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
      </Route>
    </Routes>
  );
}

export default App;
