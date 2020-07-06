import React from "react";
// import { api } from "../services/api";
import AuthHOC from "../HOCs/AuthHOC";

 class About extends React.Component {
  state = {
    authorized: false,
  };
  // componentDidMount() {
  //   if (!localStorage.getItem("token")) {
  //     this.props.history.push("/login");
  //   } else {
  //     api.auth.getCurrentUser().then((user) => {
  //       if (user.error) {
  //         this.props.history.push("/login");
  //       } else {
  //         this.setState({authorized: true})
  //       }
  //     });
  //   }
  // }

  render() {
    return (
      <div>
        {/* {this.state.authorized ? ( */}
          <div>
            <h1>Dutch Golden Age painting</h1>
            <p>
              Dutch Golden Age painting is the painting of the Dutch Golden Age,
              a period in Dutch history roughly spanning the 17th century,
              during and after the later part of the Eighty Years' War
              (1568–1648) for Dutch independence.
            </p>
            <p>
              The new Dutch Republic was the most prosperous nation in Europe
              and led European trade, science, and art. The northern
              Netherlandish provinces that made up the new state had
              traditionally been less important artistic centres than cities in
              Flanders in the south. The upheavals and large-scale transfers of
              population of the war, and the sharp break with the old monarchist
              and Catholic cultural traditions, meant that Dutch art had to
              reinvent itself entirely. The painting of religious subjects
              declined very sharply, but a large new market for all kinds of
              secular subjects grew up.
            </p>
            <p>
              Although Dutch painting of the Golden Age is included in the
              general European period of Baroque painting, and often shows many
              of its characteristics, most lacks the idealization and love of
              splendour typical of much Baroque work, including that of
              neighbouring Flanders. Most work, including that for which the
              period is best known, reflects the traditions of detailed realism
              inherited from Early Netherlandish painting.
            </p>
            <p>
              A distinctive feature of the period is the proliferation of
              distinct genres of paintings, with the majority of artists
              producing the bulk of their work within one of these. The full
              development of this specialization is seen from the late 1620s,
              and the period from then until the French invasion of 1672 is the
              core of Golden Age painting. Artists would spend most of their
              careers painting only portraits, genre scenes, landscapes,
              seascapes and ships, or still lifes, and often a particular
              sub-type within these categories. Many of these types of subject
              were very new in Western painting, and the way the Dutch painted
              them in this period was decisive for their future development.
            </p>
            <a href="https://en.wikipedia.org/wiki/Dutch_Golden_Age_painting">
              Link to Wikipedia
            </a>
          </div>
        {/* ) : (
          null
        )} */}
      </div>
    );
  }
}
  export default AuthHOC(About)