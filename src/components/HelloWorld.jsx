const cats = ["Branca", "Mascaradinho", "Trabalhador", "Arisca"];

function HelloWorld() {
  const myCats = Math.random() > 0.5 ? cats[0] : cats[1];
  return (
    <div>
      <h3>Hello, sou a Rafa</h3>
      <p>Simbora, React?</p>
      <p>{myCats}</p>
    </div>
  );
}

export default HelloWorld;
