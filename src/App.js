import logo from './logo.svg';
import './App.css';
import SignUp from './Components/Authentication/SignUp';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Authentication/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { useState } from 'react'; 
import UserHome from './Components/Home/UserHome';
import UsersPost from './Components/Home/UsersPost';

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  console.log(name); 
  return (
    <div>
      <Navbar photo={photo}></Navbar>
      <Routes>
        <Route path='/signup' element={<SignUp setPhoto={setPhoto} setName={setName}></SignUp>}></Route>
        {
          user ?  <Route path='/' element={<UsersPost photo={photo} name={name}></UsersPost>}></Route> : <Route path='/' element={<Home></Home>}></Route>
        }
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/people' element={<UserHome></UserHome>}></Route>
      </Routes>
    </div>
  );
}

export default App;
