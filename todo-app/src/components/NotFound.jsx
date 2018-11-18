import React from "react";
import Header from "./Header";

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "Error 404 | What to do?";
  }

  render() {
    return (
      <div className="container">
        <Header tagline="404 -  Page not found!" />
        <div className="alert alert-warning">
          <strong>
            Ooops .... sorry!
            <br />
          </strong>
          The requested page could not be found.
        </div>
      </div>
    );
  }
}

export default NotFound;
