import logo from './logo.svg';
import './App.css';
import SignUp from './Components/Authentication/SignUp';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;

