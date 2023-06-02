import './App.css';
import Nav from './components/nav/Nav.jsx';
import axios from 'axios';
import Home from './views/Home';
import About from './views/About';
import Deatil from './views/Deatil';
import Form from './views/Form';
import Favorites from './views/Favorites.jsx'
import { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const locate = useLocation()
   const navigate = useNavigate();


   const onSearch = async (id) => {
      try{
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if(data.name) {
         // setCharacters((oldchars)=> [...oldchars, data])
         const existingCharacter = characters.find((char) => char.id === data.id)
         if(existingCharacter){
            alert('personaje ya existente')
            return
         }
         setCharacters((oldchars) => [...oldchars, data])
         }
      }catch(error){
         alert('no hay personaje con ese ID')
      }
   }



   const login = async (userData) => {
      try {
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
         
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate]);

   const onClose = (id)=>{setCharacters(characters.filter((character) => character.id !== id))}
   return (
      <div className='App'>
         {locate.pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Home characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Deatil/>}/>
         </Routes>
      </div>
   );
}

export default App;
