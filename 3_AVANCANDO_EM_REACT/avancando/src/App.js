import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Conteiner from "./components/Conteiner";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDatails from "./components/UserDatails";

function App() {
  //const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 7234 },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    {
      id: 1,
      nome: "Gabriel",
      idade: 17,
      profissao: "engenheiro de software",
    },
    {
      id: 2,
      nome: "Isadora",
      idade: 28,
      profissao: "Medica",
    },
    {
      id: 3,
      nome: "Felipe",
      idade: 25,
      profissao: "engenheiro civil",
    },
    {
      id: 4,
      nome: "Miguel",
      idade: 16,
      profissao: "Estudante",
    },
  ];

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
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Conteiner myValue="testing">
        <h5>E este é o conteúdo</h5>
      </Conteiner>
      <Conteiner myValue="testing">
        <h5>Testando o container</h5>
      </Conteiner>
      {/* executar funcao */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Desafio 4 */}
      {users.map((user) => (
        <UserDatails
          key={user.id}
          nome={user.nome}
          idade={user.idade}
          profissao={user.profissao}
          newCarteira={user.newCarteira}
        />
      ))}
    </div>
  );
}

export default App;
