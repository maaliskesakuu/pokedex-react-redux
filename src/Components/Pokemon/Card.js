/* eslint-disable react/prop-types */
import React, { Component } from "react"
import { Link } from "react-router-dom"

class Card extends Component {
    render() {
        const { name, url } = this.props.pokemon
        const id = url.split("/")[6]
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return (
            <div className="col s2 m2">
                <div className="card vertical">
                    <div className="card-image">
                        <img src={imgUrl} alt="the pokemon" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p> {name} </p>
                        </div>
                        <div className="card-action">
                            <Link to={"/details/" + id}>Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
