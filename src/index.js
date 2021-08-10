import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
    };

    window.navigator.geolocation.getCurrentPosition(
      (postion) => this.setState({ lat: postion.coords.latitude }),
      (error) => console.log(error)
    );
  }

  render() {
    return <div>Lattitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
