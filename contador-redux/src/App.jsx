import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const contador = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Contador Global</h1>
      <h2>{contador}</h2>

      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>
        Incrementar
      </button>

      <button onClick={() => dispatch({ type: "DECREMENTAR" })}>
        Decrementar
      </button>
    </div>
  );
}

export default App;