import React from "react";
import ReactDOM from "react-dom";
import SeaseonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (postion) => this.setState({ lat: postion.coords.latitude }),
      (error) => console.log(error)
    );
  }
  componentDidUpdate() {
    console.log("comonent updated!");
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeaseonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Lattitude: {this.state.errorMessage}</div>;
    }
    return <Spinner message="Please accept the location request!" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
