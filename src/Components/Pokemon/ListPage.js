import React, { Component } from "react"
import Card from "./Card"
import Pagination from "../Layout/Pagination"
import { connect } from "react-redux"
import { initPokemon } from "../../store/actions/pokemonActions"

class ListPage extends Component {
    componentDidMount() {
        this.props.initPokemon()
    }

    render() {
        const { error, loading, pokemons } = this.props

        if (error) {
            return <div>Error! {error.message}</div>
        }

        if (loading) {
            return (
                <div className="container">
                    <h2>Loading...</h2>
                </div>
            )
        }
        return (
            <div>
                <div className="row">
                    {pokemons.map((pokemon, index) => (
                        <Card pokemon={pokemon} key={index} />
                    ))}
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
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initPokemon: () => {
            initPokemon(dispatch)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
