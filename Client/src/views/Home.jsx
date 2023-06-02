import Cards from '../components/Cards'
import {Fondo,  DivFondo} from '../components/home/home.js'

export default function Home (props) {
    return (
        <DivFondo>
            <Fondo>
                <Cards characters={props.characters} onClose={props.onClose }/>
            </Fondo>
         </DivFondo>
    )
}

