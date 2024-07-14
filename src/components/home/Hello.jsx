import './Hello.css'

const cats = ["Branca", "Mascaradinho", "Trabalhador", "Arisca"];

function Hello() {
  const myCats = Math.random() > 0.5 ? cats[0] : cats[1];
  return (
    <>
    <div className="apresentation">
      <h3>Hello, sou a Rafa</h3>
      <p>Simbora aprender React?</p>
    </div>
    <div>
      <p className="cats">Amo meus gatinhos, vou apresentar os nomes deles:</p>
      <p className="cats-name">{myCats}</p>
    </div>
    <hr />
    </>
  );
}

export default Hello;
