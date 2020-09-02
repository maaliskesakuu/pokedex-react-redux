//not working yet

export const getPokemons = () => {
  return (dispatch) => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((resp) => resp.json())
      // .then((data) => this.setState({ data }))
      .then(data => console.log(data)) 
      .then(console.log('got here' + this.state))
      // .catch((err) => console.log(err))
      .then(() => {
        dispatch({ type: "GET_POKEMON"});
      })
      .catch(err => {
        dispatch({ type: "GET_POKEMON_ERROR", err });
      });
  }
}