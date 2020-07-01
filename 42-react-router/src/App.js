import React from "react";
import "./assets/css/minty.css";
import "./App.css";
import GlassesBrowser from "./components/GlassesBrowser";
import Manager from "./components/Manager";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import GLASSES from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    glasses: [],
  };
  componentDidMount() {
    this.setState({ glasses: GLASSES });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          {/* <GlassesBrowser glasses={this.state.glasses} /> */}
          {/* <Manager /> */}
          <Route path="/" exact render={() => <h1>Hello</h1>} />
          <Route path="/manager" component={Manager} />
          <Route
            exact
            path="/glasses"
            render={() => <GlassesBrowser glasses={this.state.glasses} />}
          />
          <Route
            path="/glasses/:id"
            render={(props) => <Details {...props} glasses={this.state.glasses} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
