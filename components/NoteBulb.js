import React from "react";
import PropTypes from "prop-types";
import "./NoteBulb.less";

const NoteBulb = ({ color }) => (
  <div id="note_bulb" style={{ backgroundColor: color }} />
);

export default NoteBulb;

NoteBulb.PropTypes = {
  color: PropTypes.string.isRequired
};
