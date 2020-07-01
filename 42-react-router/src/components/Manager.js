import React from "react";

class Manager extends React.Component {
  render() {
    return (
      <>
        <div className="jumbotron">
          <h3>About the Manager</h3>
          <img
            className="manager-photo"
            src="http://stapletonion.com/dev2016/wp-content/uploads/2014/04/poor-dad-stapleton-dad.jpg"
          />
          <div className="container">
            <p>
              Hi, I'm Pete, the manager at this Sunglasses Hut. I'd love to take
              the time to get to know you, but corporate is coming by in a
              couple horus, and I lost my bank deposit slip from the 16th. I'm
              worried they'll find out, and I won't get to go on the
              company trip to Cancun. I was looking forward to wearing some cool
              sunglasses and sipping on margaritas while watching cruise ships
              get stuck on the reef. I guess I'd better start looking for that
              slip... oh bother...
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Manager;
