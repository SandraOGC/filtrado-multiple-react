import React, { Component } from "react";
import "./App.css";
import List from "./List";
const url = "https://ghibliapi.herokuapp.com/films";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    this.pedirPeliculas();
  }

  pedirPeliculas() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          peliculas: data
        });
      });
  }
  render() {
    return (
      <div className="App">
        <List peliculas={this.state.peiculas} />
      </div>
    );
  }
}

export default App;
