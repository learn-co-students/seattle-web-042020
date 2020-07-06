import React, { Fragment } from "react";
import { api } from "../services/api";
import { Redirect } from "react-router-dom";

const AuthHOC = WrappedComponent => {
  console.log(WrappedComponent)
  return class AuthHOC extends React.Component {

    state = {
      authorized: false
    };

    componentDidMount() {
        this.checkLogin()
    }

    checkLogin = () => {
      console.log("checking login");
      if (!localStorage.getItem("token")) {
        this.props.history.push("/login")
      } else {
        api.auth.getCurrentUser().then((resp) => {
          if (resp.error) {
            this.props.history.push("/login")
          } else {
            this.setState({
              authorized: true
            });
          }
        });
      }
    };

    isAuthorized = () => {
      return this.state.authorized;
    };

    render() {
      return (
        <div>
          {this.isAuthorized() ? (
            <WrappedComponent {...this.props} />
          ) : (
            null
          )}
        </div>
      );
    }
  };
};

export default AuthHOC;