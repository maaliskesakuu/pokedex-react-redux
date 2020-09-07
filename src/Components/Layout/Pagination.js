import React, { Component } from "react"
import { connect } from "react-redux"
import { getPokemons } from "../../store/actions/pokemonActions"

class Pagination extends Component {

    handleClick = (e) => {
        console.log(e.target.innerText)
        this.props.getPokemons(e.target.innerText)
    }

    getPrevious = () => {
        this.props.getPokemons(null, this.props.previousPage)
    }

    getNext = () => {
        this.props.getPokemons(null, this.props.nextPage)
    }

    render() {
        const pageLinks = []
        for (let i = 1; i <= this.props.numberOfPage; i++) {
            pageLinks.push(
                <li
                    className={
                        this.props.currentPage === i ? "active" : "waves-effect"
                    }
                    key={i}
                    onClick={this.handleClick}
                >
                    <a href="#!">{i}</a>
                </li>
            )
        }

        return (
            <div className="container">
                <ul className="pagination">
                    <li
                        className={
                            this.props.previousPage ? "waves-effect" : "disabled"
                        }
                        onClick={
                            this.props.previousPage ? this.getPrevious : () => {}
                        }
                    >
                        <a href="#!">
                            <i className="material-icons">chevron_left</i>
                        </a>
                    </li>
                    {pageLinks}
                    <li
                        className={this.props.nextPage ? "waves-effect" : "disabled"}
                        onClick={this.props.nextPage ? this.getNext : () => {}}
                    >
                        <a href="#!">
                            <i className="material-icons">chevron_right</i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        previousPage: state.previousPage,
        nextPage: state.nextPage,
        numberOfPage: state.numberOfPage,
        currentPage: state.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPokemons: (index, url) => {
            getPokemons(dispatch, index, url)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

/*

                    <a
                        href="#!"
                        // onClick={() => this.props.dispatch(getPokemonsNext(i))}
                    >

*/

