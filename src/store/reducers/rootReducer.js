const initialState = {
    pokemons: [
        {
            name: "Butterfree",
        url: "https://pokeapi.co/api/v2/pokemon-form/12/",
            id:1
        },
        {
            name: "Weedle",
          url: "https://pokeapi.co/api/v2/pokemon-form/13/",
          id:2
        },
        {
            name: "Kakuna",
            url: "https://pokeapi.co/api/v2/pokemon-form/14/",
            id:3
        },
        {
            name: "Pidgey",
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
