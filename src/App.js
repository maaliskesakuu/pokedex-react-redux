import React from "react"
import NavigationBar from "./Components/Layout/NavigationBar"
import ListPage from "./Components/Pokemon/ListPage"
import DetailPage from "./Components/Pokemon/DetailPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 3000)
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <NavigationBar></NavigationBar>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={ListPage}></Route>
                            <Route
                                exact
                                path="/details/:queryParam"
                                component={DetailPage}
                            ></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
