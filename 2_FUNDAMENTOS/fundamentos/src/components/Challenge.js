const Challenge = () => {
  const X = 10;
  const y = 3;

  return (
    <div>
      <p>X: {X}</p>
      <p>Y: {y}</p>
      <button onClick={() => console.log(X + y)}>
        Clique aqui para ver a soma!
      </button>
    </div>
  );
};

export default Challenge;
