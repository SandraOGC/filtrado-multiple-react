import React from "react";
import Card from "./Card";

class List extends React.Component {
  render() {
    return (
      <ul className="app__list">
        {this.state.peliculas.map(item => {
          return (
            <li className="app__item">
              <Card item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
