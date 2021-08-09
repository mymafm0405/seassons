import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (postion) => console.log(postion),
      (error) => console.log(error)
    );

    return <div>Lattitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
