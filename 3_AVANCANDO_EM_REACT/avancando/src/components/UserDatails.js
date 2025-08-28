const UserDatails = ({ nome, idade, profissao, newCarteira }) => {
  return (
    <div>
      <h2>Detalhes do Usuário: </h2>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissao: {profissao}</li>
        {idade >= 18 ? (
          <p>Pode tirar a carteira de habilitacao</p>
        ) : (
          <p>Menor de idade!</p>
        )}
      </ul>
    </div>
  );
};

export default UserDatails;
