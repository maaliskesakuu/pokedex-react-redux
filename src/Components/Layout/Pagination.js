import React, { Component } from "react"
import { connect } from "react-redux"
import { getPokemonsNext } from "../../store/actions/pokemonActions"

// import {loadNewPage, loadExactPage} from '../../store/actions/pokemonActions'

//props
//postsPerPage
//totalPosts
//paginater

//const pageNumbers=[]
//for (let i=1; i <= Math.ceil(totalPosts / postsPerPage; i ++)) {
//    pageNumbers.push(i)
// }

const numberOfPages = Math.ceil(1050 / 20)

class Pagination extends Component {
    // nextPage = (pageNumber) => {
    //  fetch ...${pageNumber}...
    // data.results, currentPage: pageNumber  
    // }

    // previousPage() {
    //    this.props.dispatch(loadNewPage({page: -1}));
    // }

    // goToPage(page) {
    //    this.props.dispatch(loadExactPage({page}))
    // }

    render() {
        const pageButtons = [];
        for (let i = 1; i <= numberOfPages; i++) {
            // let active = this.props.currentPage == i ? 'active': '';
            pageButtons.push(
                <li className="waves-effect" key={i}>
                    <a href="#!" onClick={()=> this.props.dispatch(getPokemonsNext(i))}>{i}</a>
                </li>
            )
        }

        return (
/* <div>
            <ul>
            {pageNumbers.map(number => (
            <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
            {number}
            </a>
            </li>
            ))}
            </ul>
            </div>
*/
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
                    {/* <li className="waves-effect">
                        <a href="#!">
                            <i className="material-icons">chevron_left</i>
                        </a>
                    </li> */}
                    {this.props.currentPage > 1 ? <li onClick={() => this.props.getPokemonsNext(this.props.currentPage -1)}><a href="#">Prev</a></li> : ''}
                    {pageButtons}
                    {/* <li className="waves-effect">
                        <a href="#!">
                            <i className="material-icons">chevron_right</i>
                        </a>
                    </li> */}
                    {this.props.currentPage < this.props.pages + 1 ? <li  onClick={() => this.props.getPokemonsNext(this.props.currentPage +1)}>Next<a href="#"></a></li> : ''}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.products.currentPage,
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Pagination)

/*
import React from 'react';

const Pagination = props => {
    const pageLinks= []

    for (let i = 1, ...)
    let active = props.currentPage == i ? 'active': '';

    pageLinks.push(<li className=(`${active}`) key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)

}
return (
    <div>
        <ul>
        {props.currentPage > 1 ? <li onClick={() => props.nextPage(props.currentPage -1)}><a href="#">Prev</a></li> : ''}
        {pageLinks}
        {props.currentPage < props.pages + 1 ? <li  onClick={() => props.nextPage(props.currentPage +1)}>Next<a href="#"></a></li> : ''}
        </ul>
    </div>


)
}

*/
