import React, { Component } from "react"
import Card from "./Card"
import Pagination from "../Layout/Pagination"
import { connect } from "react-redux"

import { getPokemons } from "../../store/actions/pokemonActions"

class ListPage extends Component {
    componentDidMount() {
        this.props.dispatch(getPokemons())
    }

    render() {
        const { error, loading, products } = this.props

        if (error) {
            return <div>Error! {error.message}</div>
        }

        if (loading) {
            return <div className="container"><p>Loading...</p></div>
        }

        return (
            <div>
                <div className="row">
                    <ul>
                        {products.map((product, index) => (
                            <Card pokemon={product} key={index} />
                        ))}
                    </ul>
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
        products: state.products.items,
        loading: state.products.loading,
        error: state.products.error,
    }
}

export default connect(mapStateToProps)(ListPage)
