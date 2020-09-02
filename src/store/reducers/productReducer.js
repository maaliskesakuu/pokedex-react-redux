import {
    GET_POKEMONS_BEGIN,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_FAILURE,
} from "../actions/pokemonActions";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.products
            }
        case GET_POKEMONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
            }
        default:
            return state
    }
}
