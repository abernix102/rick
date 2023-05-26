import { useState } from "react";
export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   function handleChange (event){
      setId(event.target.value)
   }
   return (
      <div>
         <input type="search" onChange={handleChange} value={id}/>
         <button onClick={()=>(onSearch(id))}>agregar</button>
      </div>
   );
}