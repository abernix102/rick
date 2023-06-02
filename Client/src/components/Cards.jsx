import Card from './Card';
import { Contenedor} from '../components/cards/cards'
export default function Cards({characters, onClose}) {
   return(
      <Contenedor>
         {
            characters.map(({id, name, status, species, gender, origin, image})=>{
               return(
                  <Card 
                  key={id}
                  id={id}
                  onClose={onClose}
                  name={name}
                  image={image}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  />
               )
            })
         }
      </Contenedor>
   )
}
