import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = ()=>{
    const { id } = useParams();
    const [character , setCharacter] = useState({})

    useEffect(() => {
        const URL_BASE = 'http://be-a-rym.up.railway.app/api/character';
        const API_KEY = '6b8b4837ce9e.b406f79e2f42e414f4d3'
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
        <div>
            {character.name ? (
            <div>
                <h2>{character.name}</h2>
                <p>{character.status}</p>
                <p>{character.specie}</p>
                <p>{character.gender}</p>
                <p>{character.origin?.name}</p>
                <img src={character.image} alt={character.name}/>
            </div>):(<h2>cargando pa perate</h2>)}
        </div>
    )
}

export default Detail;