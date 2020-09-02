import React, { Component } from "react"
import Card from "./Card"
import Pagination from "../Layout/Pagination"
import { connect } from "react-redux"

import { getPokemons } from "../../store/actions/getPokemonActions"

class ListPage extends Component {
    // state = {
    //     pokemons: null,
    // }

    // componentDidMount() {
    //     fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
    //         .then((resp) => resp.json())
    //         .then((data) => this.setState({ data }))
    //         .catch((err) => console.log(err))
    // }

    // render() {
    //     return (
    //         <div>
    //             <div className="row">
    //                 {this.state.data
    //                     ? this.state.data.results.map((pokemon, index) => (
    //                           <Card pokemon={pokemon} key={index} />
    //                       ))
    //                     : "Loading..."}
    //             </div>
    //             <div className="row">
    //                 <Pagination></Pagination>
    //             </div>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                <div className="row">
                    {console.log(this.props.pokemons)}
                    {this.props.pokemons
                        ? this.props.pokemons.map((pokemon, index) => (
                              <Card pokemon={pokemon} key={index} />
                          ))
                        : "Loading..."}
                </div>
                <div className="row">
                    <Pagination></Pagination>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPokemon: (pokemon) => dispatch(getPokemons(pokemon)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
