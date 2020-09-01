//not working yet

export const getPokemons = () => {
  return (dispatch) => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((resp) => resp.json())
      // .then((pokemons) => this.setState({ pokemons }))
      // .catch((err) => console.log(err))
      .then(() => {
        dispatch({ type: "GET_POKEMON" });
      })
      .catch(err => {
        dispatch({ type: "GET_POKEMON_ERROR", err });
      });
  }
}