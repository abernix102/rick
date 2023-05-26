import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = ()=>{
    const { id } = useParams();
    const [character , setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
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