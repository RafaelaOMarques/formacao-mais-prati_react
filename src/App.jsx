import HelloWorld from "./components/home/HelloWorld";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import "./App.css";
import Counter from "./components/counter/Counter";
import ToDo from "./components/todo/ToDo";

function App() {
  return (
    <>
      <NavBar />
      <HelloWorld />
      <Counter />
      <ToDo />
      <Footer
        author="Rafaela"
        message="Prefirível o aprendizado por tentar e não conseguir, do que a dúvida de nem se quer ter tentado "
      />
      
    </>
  );
}

export default App;
