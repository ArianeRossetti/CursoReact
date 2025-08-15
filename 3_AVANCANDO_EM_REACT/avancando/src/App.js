import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "Joaquim";
  const [userName] = useState("Maria");

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
      <ConditionalRender />
      {/*props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand={"Ford"} color="Vermelha" km={0} newCar={true} />
      <CarDetails brand={"Fiat"} color="Branco" km={4500} newCar={false} />
    </div>
  );
}

export default App;
