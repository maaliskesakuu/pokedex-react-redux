function getPokemonAPI() {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
        .then(handleErrors)
        .then((res) => res.json())
}

export function getPokemons() {
    return (dispatch) => {
        dispatch(getPokemonsBegin())
        return getPokemonAPI()
            .then((json) => {
                console.log(json)
                console.log(json.count)
                console.log(json.next)
                dispatch(getPokemonsSuccess(json.results))
                return json.results
            })
            .catch((error) => dispatch(getPokemonsFailure(error)))
    }
}

function nextPage() {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
        .then(handleErrors)
        .then((res) => res.json())
}

export function getPokemonsNext() {
    return (dispatch) => {
        dispatch(getPokemonsBegin())
        return nextPage()
            .then((json) => {
                console.log(json)
                dispatch(getPokemonsSuccess(json.results))
                return json.results
            })
            .catch((error) => dispatch(getPokemonsFailure(error)))
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}

export const GET_POKEMONS_BEGIN = "GET_POKEMONS_BEGIN"

export const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS"

export const GET_POKEMONS_FAILURE = "GET_POKEMONS_FAILURE"

export const GET_POKEMONS_NEXT = "GET_POKEMONS_NEXT"

// export const LOAD_NEW_PAGE = "LOAD_NEW_PAGE"

// export const LOAD_EXACT_PAGE = "LOAD_EXACT_PAGE"

// export const FILTER_BY_NAME = "FILTER_BY_NAME"

// export const loadNewPage = (payload) => ({
//     type: LOAD_NEW_PAGE,
//     payload,
// })

// export const loadExactPage = (payload) => ({
//     type: LOAD_EXACT_PAGE,
//     payload,
// })

// export const filterByName = payload => ({
//     type: FILTER_BY_NAME,
//     payload
// })

export const getPokemonsBegin = () => ({
    type: "GET_POKEMONS_BEGIN",
})

export const getPokemonsSuccess = (products) => ({
    type: GET_POKEMONS_SUCCESS,
    payload: { products },
})

export const getPokemonsFailure = (error) => ({
    type: GET_POKEMONS_FAILURE,
    payload: { error },
})

export const getPokemonsNextPage = (products) => ({
    type: GET_POKEMONS_NEXT,
    payload: { products },
})
