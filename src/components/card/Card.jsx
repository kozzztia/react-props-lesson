import { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props); // Логируем переданные пропсы
  }

  render() {
    const { title, description } = this.props; 

    return (
      <li className="card">
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Card;