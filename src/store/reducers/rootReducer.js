import {
    GET_POKEMONS_BEGIN,
    INITIAL_API_CALL,
    GET_POKEMONS_FAILURE,
    POKEMON_LIST_UPDATED,
    FOUND_POKEMON,
} from "../actions/pokemonActions"

const initialState = {
    pokemons: [],
    loading: false,
    error: null,
    previousPage: null,
    nextPage: null,
    numberOfPage: 0,
    currentPage: 1,
    details: null,
}

const getNumberOfPage = (count) => {
    return Math.ceil(count / 20)
}

const getCurrentPage = ({ next, count }) => {
    if (next === null) {
        return getNumberOfPage(count)
    }
    const queryString = next.split("?")[1]
    const searchParams = new URLSearchParams(queryString)
    const offset = searchParams.get("offset")
    return offset / 20
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case INITIAL_API_CALL:
            return {
                ...state,
                loading: false,
                previousPage: action.data.previous,
                nextPage: action.data.next,
                numberOfPage: getNumberOfPage(action.data.count),
                pokemons: action.data.results,
            }
        case GET_POKEMONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
            }
        case POKEMON_LIST_UPDATED:
            return {
                ...state,
                loading: false,
                previousPage: action.data.previous,
                nextPage: action.data.next,
                pokemons: action.data.results,
                currentPage: getCurrentPage(action.data),
            }
        case FOUND_POKEMON:
            console.log(action.data)
            return { ...state, details: action.data }
        default:
            return state
    }
}

export default rootReducer
