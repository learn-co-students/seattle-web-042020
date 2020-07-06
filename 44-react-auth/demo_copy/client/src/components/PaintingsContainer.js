import React from "react";
import PaintingsNew from "./PaintingsNew";
import PaintingsList from "./PaintingsList";
import PaintingShow from "./PaintingShow";
import { Route, Switch } from "react-router-dom";
import { api } from "../services/api";
import AuthHOC from "../HOCs/AuthHOC";

class PaintingsContainer extends React.Component {
  constructor() {
    super();
    console.log("Building a container");
    this.state = {
      paintings: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    // if (!localStorage.getItem("token")) {
    //   this.props.history.push("/login");
    // } else {
    //   api.auth.getCurrentUser().then(user => {
    //     // console.log(user);
    //     if (user.error) {
    //       this.props.history.push("/login");
    //     } else {
    api.paintings.getPaintings().then((data) => {
      this.setState({
        paintings: data.slice(0, 20).sort((a, b) => b.votes - a.votes),
      });
    });
    //     }
    //   });
    // }
  }

  handleDelete(id) {
    const updatedState = this.state.paintings.filter((pntg) => pntg.id !== id);

    this.setState({ paintings: updatedState });
  }

  handleVote(id) {
    const updatedPaintings = this.state.paintings
      .map((pntg) => {
        if (pntg.id === id) {
          return Object.assign({}, pntg, { votes: pntg.votes + 1 });
        } else {
          return pntg;
        }
      })
      .sort((a, b) => b.votes - a.votes);

    this.setState((state) => {
      return { paintings: updatedPaintings };
    });
  }

  render() {
    console.log("rendering Paintings");
    return (
      <div>
        <Switch>
          <Route path="/paintings/new" component={PaintingsNew} />
          <Route
            path="/paintings/:slug"
            render={(props) => {
              const slug = props.match.params.slug;
              const painting = this.state.paintings.find(
                (pntg) => pntg.slug === slug
              );
              return painting ? (
                <PaintingShow painting={painting} />
              ) : (
                <h1>Loading...</h1>
              );
            }}
          />
          <Route
            path="/paintings"
            render={() => (
              <PaintingsList
                handleDelete={this.handleDelete}
                handleVote={this.handleVote}
                paintings={this.state.paintings}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

// export default PaintingsContainer;
export default AuthHOC(PaintingsContainer);
