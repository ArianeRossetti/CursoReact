const TemplateExpressions = () => {
  const name = "Ariane";
  const data = {
    age: 31,
    job: "Programer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Voce atua como: {data.job}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions;
