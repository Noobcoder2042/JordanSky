import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/Table";
import Graph from "./pages/Graph";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </>
  );
}

export default App;
