import Hello from "./components/home/Hello";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import "./App.css";
import Counter from "./components/counter/Counter";
import ToDo from "./components/todo/ToDo";
import NavegacaoAbas from './components/navegacao/NavegacaoAbas'
import ClassComponent from "./components/classComponent/ClassComponent";
import TimerComponent from './components/timer/TimerComponent'

function App() {
  return (
    <>
      <NavBar />
      <Hello />
      <Counter />
      <NavegacaoAbas/>
      <ClassComponent/>
      <TimerComponent/>
      <ToDo />
      <Footer
        author="Rafaela Oliveira Marques"
        message=' "Prefirível o aprendizado por tentar e não conseguir, do que a dúvida de nem se quer ter tentado" '
      />
      
    </>
  );
}

export default App;
