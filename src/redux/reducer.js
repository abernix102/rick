import { ADD_FAV, FILTER, REMOVE_FAV } from "./actions-type"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload] 
            }
        case REMOVE_FAV:
            return{
                myFavorites: state.myFavorites.filter((character)=> character.id !== parseInt(action.payload))
            }
        case FILTER:
            return{
                ...state,
                myFavorites: state.allCharacters
            }
        default:
            return {...state}
    }
}


export default reducer;