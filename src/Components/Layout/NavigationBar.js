import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

class NavigationBar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper container">
                    <ul className="left">
                        <Link to="/">Home</Link>
                    </ul>
                    <SearchBar />
                </div>
            </nav>
        )
    }
}

export default NavigationBar;
