import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Login from "./Login";
import PaintingsContainer from "./PaintingsContainer";
import { api } from "../services/api";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: {
        user: {}
      }
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token){
      api.auth.getCurrentUser()
      .then(user => {
        this.setState({auth:{...this.state.auth, user:{id:user.id, username:user.username} }})
      })
    }

  }

  login = data => { 
    console.log(data)
    localStorage.setItem("token", data.jwt)
    this.setState({auth:{...this.state.auth, user:{id:data.id, username:data.username} }})
  };

  logout = () => {
    localStorage.removeItem("token")
    this.setState({auth:{user:{}}})
  };

  render() {
    console.log('test, test')
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
          currentUser={this.state.auth.user}
          handleLogout={this.logout}
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <Route exact path="/" component={About} />
            <Route
              exact
              path="/login"
              render={props => <Login {...props} onLogin={this.login} />}
            />
            <Route path="/paintings" component={PaintingsContainer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
