import Cards from '../components/Cards'

export default function Home (props) {
    return (
        <div>
            <section>
            <Cards characters={props.characters} onClose={props.onClose }/>
            </section>
        </div>
    )
}

