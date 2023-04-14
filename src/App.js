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

const email = 'arroz_conpollo@gmail.com';
const password  = '12345678';
function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const locate = useLocation()
   const navigate = useNavigate();

   function onSearch(id) {
      const URL_BASE = 'http://be-a-rym.up.railway.app/api/character';
      const API_KEY = '6b8b4837ce9e.b406f79e2f42e414f4d3'
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function login(userData){
      if(userData.password === password && userData.email === email){
         setAccess(true);
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access]);

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
