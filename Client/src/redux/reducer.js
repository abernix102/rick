import { ADD_FAV, FILTER, REMOVE_FAV } from "./actions-type"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}


const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
      return { 
        ...state, 
        myFavorites: payload, 
        allCharacters: payload };
        case REMOVE_FAV:
      return { 
        ...state, 
        myFavorites: payload };
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