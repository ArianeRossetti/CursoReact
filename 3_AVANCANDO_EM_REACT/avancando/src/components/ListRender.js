import React, { use, useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Teste 1", age: 28 },
    { id: 2, name: "Teste 2", age: 21 },
    { id: 3, name: "Teste 3", age: 32 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
