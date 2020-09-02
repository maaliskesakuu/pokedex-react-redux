function getPokemonAPI() {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
        .then(handleErrors)
        .then((res) => res.json())
}

export function getPokemons() {
    return (dispatch) => {
        dispatch(getPokemonsBegin())
        return (
            getPokemonAPI()
                .then((json) => {
                  console.log(json);
                    dispatch(getPokemonsSuccess(json.results))
                    return json.results
                })
                .catch((error) => dispatch(getPokemonsFailure(error)))
        )
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
