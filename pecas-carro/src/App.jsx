import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CrudPecas from "./pages/CrudPecas";

function App() {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#111" }}>
  <Link to="/" style={{ color: "white", marginRight: "15px" }}>
    Home
  </Link>

  <Link to="/pecas" style={{ color: "white" }}>
    Peças
  </Link>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pecas" element={<CrudPecas />} />
      </Routes>
    </div>
  );
}

export default App;