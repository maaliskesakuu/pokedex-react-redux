export const GET_POKEMONS_BEGIN = "GET_POKEMONS_BEGIN"

export const INITIAL_API_CALL = "INITIAL_API_CALL"

export const GET_POKEMONS_FAILURE = "GET_POKEMONS_FAILURE"

export const POKEMON_LIST_UPDATED = "POKEMON_LIST_UPDATED"

export const FOUND_POKEMON = "FOUND_POKEMON"

const getPokemonsBegin = () => ({
    type: GET_POKEMONS_BEGIN,
})

const initialPokemons = (data) => ({
    type: INITIAL_API_CALL,
    data: data,
})

const getPokemonsFailure = (error) => ({
    type: GET_POKEMONS_FAILURE,
    payload: { error },
})

const getMorePokemons = (data) => ({
    type: POKEMON_LIST_UPDATED,
    data: data,
})

const getOnePokemon = (data) => ({
    type: FOUND_POKEMON,
    data: data,
})

// to handle errors
const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}

export const initPokemon = (dispatch) => {
    dispatch(getPokemonsBegin())
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(handleErrors)
        .then((resp) => resp.json())
        .then((data) => {
            dispatch(initialPokemons(data))
        })
        .catch((error) => dispatch(getPokemonsFailure(error)))
}

export const getPokemons = (dispatch, index, specificUrl) => {
    const params = "?limit=20&offset=" + (index - 1) * 20
    const apiUrl = specificUrl
        ? specificUrl
        : "https://pokeapi.co/api/v2/pokemon/" + params

    dispatch(getPokemonsBegin())
    fetch(apiUrl)
        .then((resp) => resp.json())
        .then((data) => {
            dispatch(getMorePokemons(data))
        })
        .catch((error) => dispatch(getPokemonsFailure(error)))
}

export const searchPokemon = (dispatch, queryParam) => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + queryParam

    fetch(apiUrl)
        .then((resp) => resp.json())
        .then((data) => {
            dispatch(getOnePokemon(data))
            console.log(data)
        })
        .catch((err) => {
            dispatch({
                type: "SEARCH_POKEMON_FAILED",
                err: err,
            })
        })
       .catch((err) => {
           dispatch({
               type: "SEARCH_POKEMON_FAILED",
               err: err,
           })
       })
}
