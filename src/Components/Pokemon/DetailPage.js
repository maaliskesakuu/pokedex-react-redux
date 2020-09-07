/* eslint-disable react/prop-types */
import React, { Component } from "react"
import { connect } from "react-redux"
import { searchPokemon } from "../../store/actions/pokemonActions"

class DetailPage extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {}
    // }

    componentDidMount() {
        const { queryParam } = this.props.match.params
        this.props.searchPokemon(queryParam)
    }

    render() {
        console.log(this.props.details)
        return (
            <div>
                {this.props.details ? (
                    <div className="card">
                        <div className="card-image" style={{ width: "250px" }}>
                            <img
                                className="materialboxed"
                                width="40"
                                src={this.props.details.sprites.front_default}
                                alt="the Pokemon"
                            />
                        </div>
                        <div className="card-title">{this.props.details.name}</div>
                        <div className="card-content">Some description</div>
                        {this.props.details.stats.map((stat, index) => {
                            return (
                                <div
                                    className="progress"
                                    key={index}
                                    style={{
                                        height: "4rem",
                                    }}
                                >
                                    <div
                                        className="determinate"
                                        style={{
                                            width:
                                                (stat.base_stat / 180) * 100 + "%",
                                        }}
                                    >
                                        <p>{stat.stat.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    ""
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.details,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchPokemon: (queryParam) => {
            searchPokemon(dispatch, queryParam)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)
