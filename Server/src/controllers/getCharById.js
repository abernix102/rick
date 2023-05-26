const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/";


const getCharById = async (req, res) => {
    try{
        const {id} = req.params;
        const {data} = await axios.get(`${URL}/${id}`)

        if(!data.name) throw new Erro('not found')

        const character = {
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender
        }
        return res.status(200).json(character)
    }catch(error){
        res.status(500).send(error.message)
    }
}


module.exports = {
    getCharById
}