const Events = () => {
  const handleMyEvent = () => {
    console.log("Ativou o evento");
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
    </div>
  );
};

export default Events;
