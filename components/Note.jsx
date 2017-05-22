import React from "react";
import PropTypes from "prop-types";
import NoteBulb from "./NoteBulb";
import "./Note.less";

export default class Note extends React.Component {
  render() {
    const title = this.props.title || null;
    return (
      <div className="Note">

        <NoteBulb color={this.props.color} />

        <h4 className="Note__title">{title}</h4>

        <span className="Note__del-icon" onClick={this.props.onDelete}>
          X
        </span>

        <div className="Note__text">{this.props.children}</div>
      </div>
    );
  }
}
Note.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.string
};
