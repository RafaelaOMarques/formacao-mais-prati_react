import cats from "./../../assets/cats.jpg";
import "./NavBar.css";

function NavBar() {
  const headerStyle = {
    backgroundColor: "#333",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
    textAlign: "center",
  };

  const listStyle = {
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    padding: 0,
  };

  const listItemStyle = {
    display: "inline",
    margin: "0 15px",
    hover: "green",
  };

  return (
    <header style={headerStyle}>
      <div className="logo">
        <img src={cats} alt="gatinho lindo" />
      </div>

      <div style={listStyle}>
        <a style={listItemStyle}>Home</a>
        <a style={listItemStyle}>Conheça React</a>
        <a style={listItemStyle}>Faq</a>
      </div>
    </header>
  );
}

export default NavBar;
