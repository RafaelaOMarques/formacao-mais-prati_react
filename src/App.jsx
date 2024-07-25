import Home from "./components/home/Hello";
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
import ToggleText from './components/desafio-1/toggleText/ToggleText'
import RealTimeClock from './components/desafio-1/realTimeClock/RealTimeClock'
import WindowSize from './components/desafio-1/windowSize/WindowSize'
import FormsSimple from './components/forms/FormsSimple'
import UserCard from './components/aninhamento-componentes/UserCard'
import { useState } from "react";
import MyChildren from './components/context/ContextFilho'
import { MyProvider } from "./components/context/Context";
// import { Route } from "react-router-dom";
// import Preferences from './components/context/Preferences'
import { BrowserRouter  as Router, Route, Routes, Navigate} from "react-router-dom";
import ProtectedRoute from './components/route/ProtectedRoute'
import Login from './components/route/Login'
import PostUser from './components/axios/PostUser'
import GetUser from './components/axios/GetUser'
import PutUser from './components/axios/PutUser'
import DeleteUser from './components/axios/DeleteUser'


function App() {
  const [ user, setUser ] = useState({name: "GoKu", age: 43})
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/forms" Component={FormsSimple}/>
          <Route path="/news" Component={PostsNews}/>
          <Route path="/timer" Component={TimerComponent}/>
          <Route path="/user" Component={UserProfile}/>
          <Route path="/cadastrar-user" Component={PostUser}/>
          <Route path="/count" Component={Counter}/>
          <Route path="/buscar-user" element={<GetUser/>}/>
          <Route path="/atualizar-user" element={<PutUser/>}/>
          <Route path="/deletar-user" element={<DeleteUser/>}/>
          {/* //Usando o Redirect/Navigate        
          <Route path="/count" elem={<Navigate to="/"/>} /> */}
          <Route path="/todo" Component={ToDo}/>
          <Route path="/login" element={<Login/>}/>
          <Route
            path="/home"
            element={
              <ProtectedRoute isLoggedIn={true}>
                <NavegacaoAbas />
              </ProtectedRoute>
            }
          />

        </Routes>
      </Router>
      <WindowSize/>

      {/* <MyProvider>
        <MyChildren/>
      </MyProvider> */}
      {/* <Preferences /> */}
      {/* <UserCard user={user} setUser={setUser}></UserCard> */}
      {/* <RealTimeClock/> */}
      {/* <ToggleText/> */}
      {/* <ClassComponent/> */}
      {/* <TimerLifeComponent/> */}
      <Footer
        author="Rafaela Oliveira Marques"
        message=' "Prefirível o aprendizado por tentar e não conseguir, do que a dúvida de nem se quer ter tentado" '
      />
      
    </>
  );
}

export default App;
