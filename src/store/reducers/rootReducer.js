const initialState = {
    pokemons: [
        {
            name: "Pikachu",
        url: "https://pokeapi.co/api/v2/pokemon-form/12/",
            id:1
        },
        {
            name: "Squirtle",
          url: "https://pokeapi.co/api/v2/pokemon-form/13/",
          id:2
        },
        {
            name: "Charmander",
            url: "https://pokeapi.co/api/v2/pokemon-form/14/",
            id:3
        },
        {
            name: "Metapod",
            url: "https://pokeapi.co/api/v2/pokemon-form/16/",
            id:4
        },
    ],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POKEMON":
            console.log("got Pokemons", action.pokemon)
            return {
                state,
            }

        case "GET_POKEMON_ERROR":
            console.log("get pokemons ", action.err)
            return state
        default:
            return state
    }
}

export default rootReducer
