import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <HelloWorld />
      <Footer
        author="Rafaela"
        message="Prefirível o aprendizado por tentar e não conseguir, do que a dúvida de nem se quer ter tentado "
      />
    </>
  );
}

export default App;
