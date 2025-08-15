import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Marcelo");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <h1>If ternário</h1>
      {name === "Joao" ? (
        <div>
          <p>O nome é Joao</p>
        </div>
      ) : (
        <div>
          <p>Nome nao encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("Joao")}>Clica aqui!</button>
    </div>
  );
};

export default ConditionalRender;
