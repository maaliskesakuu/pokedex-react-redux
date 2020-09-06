import {
    GET_POKEMONS_BEGIN,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_FAILURE,
    GET_POKEMONS_NEXT
} from "../actions/pokemonActions"

const initialState = {
    items: [],
    loading: false,
    error: null,
    // totalResuls: 0,
    currentPage: 1,
    // productsPerPage: 20
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
                items: action.payload.products,
            }
        case GET_POKEMONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
            }
        case GET_POKEMONS_NEXT:
            return {
                ...state,
                items: action.payload.products
            }
        default:
            return state
    }
}
