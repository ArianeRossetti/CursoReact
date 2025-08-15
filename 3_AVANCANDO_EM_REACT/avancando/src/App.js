import "./App.css";

import City from "./assets/city.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
  return (
    <div className="App">
      <h1>Avancando em React!</h1>

      {/* Imagem em puplic */}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>

      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
