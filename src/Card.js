import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h2 className="card__title">{this.props.item.title}
          <small className="card__title-year">({this.props.item.release_date})</small>
        </h2>
        <div>{this.props.item.rt_score}</div>
      </div>
    );
  }
}

export default Card;
