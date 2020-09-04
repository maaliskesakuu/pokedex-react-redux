import {
    GET_POKEMONS_BEGIN,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_FAILURE,
    // FILTER_BY_NAME
} from "../actions/pokemonActions"

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
                items: action.payload.products,
            }
        case GET_POKEMONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
            }
            //  case FILTER_BY_NAME:
            //      //filter by name
            //     let newState = Object.assign({}, state)
            //     let value = action.payload.value;
            //     let filteredValues = state.products.filter(product => {
            //         return product.name.toLowerCase().includes(value)
            //     })
            // let appliedFilters = state.appliedFilters
            // if (value) {
            //     let index = appliedFilters.indexOf(FILTER_BY_NAME)
            //     if (index === -1) appliedFilters.push(FILTER_BY_NAME)
            //     newState.filteredProducts = filteredValues
            // } else {
            //     let index = appliedFilters.indexOf(FILTER_BY_NAME)
            //     appliedFilters.splice(index, 1)
            //     if (appliedFilters.length === 0) {
            //         newState.filteredProducts = newState.products
            //     }
            // }
        //     return newState;
        default:
            return state
    }
}
