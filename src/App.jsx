import Hello from "./components/home/Hello";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import "./App.css";
import Counter from "./components/counter/Counter";
import ToDo from "./components/todo/ToDo";
import NavegacaoAbas from './components/navegacao/NavegacaoAbas'
import ClassComponent from "./components/classComponent/ClassComponent";
import TimerComponent from './components/timer/TimerComponent'
import TimerLifeComponent from './components/lifeCycle/LifeCycle'
import UserProfile from './components/user/UserProfile';
import PostsNews from './components/news/PostsNews'
import NewsUpdater from './components/newsupdater/NewsUpdater'
import TitleUpdater from './components/desafio-1/titleUpdater/TitleUpdater'
import LimitedCounter from './components/desafio-1/limitedCounter/LimitedCounter'
import ToggleText from './components/desafio-1/toggleText/ToggleText'
import RealTimeClock from './components/desafio-1/realTimeClock/RealTimeClock'
import WindowSize from './components/desafio-1/windowSize/WindowSize'
import FormsSimple from './components/forms/FormsSimple'
import Forms2 from './components/forms/Forms2'
import RegistrationFrom from './components/forms/Forms3'
import UserCard from './components/aninhamento-componentes/UserCard'
import { useState } from "react";

function App() {
  const { user, setUser } = useState({name: "GoKu", age: 43})
  return (
    <>
      <NavBar />
      <FormsSimple/>
      <Forms2/>
      <RegistrationFrom/>
      <UserCard user={user} setUser={setUser}/>
      <TitleUpdater/>
      <WindowSize/>
      <RealTimeClock/>
      <ToggleText/>
      <LimitedCounter/>
      <Hello />
      <UserProfile/>
      <PostsNews/>
      <Counter />
      <NavegacaoAbas/>
      <ClassComponent/>
      {/* <TimerComponent/> */}
      <ToDo />
      <TimerLifeComponent/>
      <NewsUpdater/>
      <Footer
        author="Rafaela Oliveira Marques"
        message=' "Prefirível o aprendizado por tentar e não conseguir, do que a dúvida de nem se quer ter tentado" '
      />
      
    </>
  );
}

export default App;
