import React, { Component } from "react"

// import {loadNewPage, loadExactPage} from '../../store/actions/pokemonActions'

let numberOfPages = Math.ceil(1050 / 20)

class Pagination extends Component {
    // nextPage() {
    //    this.props.dispatch(loadNewPage({page: 1}))
    // }

    // previousPage() {
    //    this.props.dispatch(loadNewPage({page: -1}));
    // }

    // goToPage(page) {
    //    this.props.dispatch(loadExactPage({page}))
    // }
    render() {
        let pageButtons = []
        for (let i = 1; i <= numberOfPages; i++) {
            pageButtons.push(
                <li waves-effect>
                    <a href="#!">{i}</a>
                </li>
            )
        }

        return (
            <div className="container">
                {/* <nav>
                    <button
                        className="button pagination-previous"
                        onClick={() => {
                            this.previousPage()
                        }}
                    >
                        Previous
                    </button>
                    <button
                        className="button pagination-next"
                        onClick={() => {
                            this.nextPage()
                        }}
                    >
                        Next page
                    </button>
                    <ul className="pagination-list">
                        {[...Array(this.props.state.filteredPages)].map(
                            (value, index) => (
                                <button
                                    className={`button pagination-link ${
                                        this.props.state.currentPage === index + 1
                                            ? "is-current"
                                            : ""
                                    }`}
                                    aria-label="Page 1"
                                    onClick={() => this.goToPage(index + 1)}
                                    aria-current="page"
                                >
                                    {index + 1}
                                </button>
                            )
                        )}
                    </ul>
                </nav> */}

                <ul className="pagination">
                    <li className="disabled">
                        <a href="#!">
                            <i className="material-icons">chevron_left</i>
                        </a>
                    </li>
                    {pageButtons}
                    <li className="waves-effect">
                        <a href="#!">
                            <i className="material-icons">chevron_right</i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Pagination
