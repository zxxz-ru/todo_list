import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import "./ColorPicker.less";

const COLORS = [
  "#FFFFFF",
  "#80D8FF",
  "#FFFF8D",
  "#FF8A80",
  "#CCFF90",
  "#CFD8DC",
  "#FFD180"
];

export default class ColorPicker extends React.Component {
  render() {
    return (
      <div className="ColorPicker">
        {COLORS.map(color => (
          <div
            key={color}
            className={cx("ColorPicker__swatch", {
              selected: this.props.value === color
            })}
            style={{ backgroundColor: color }}
            onClick={this.props.onChange.bind(null, color)}
          >
            {this.props.counter[color] ? this.props.counter[color] : ""}
          </div>
        ))}
      </div>
    );
  }
}
ColorPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  counter: PropTypes.shape({ color: PropTypes.number })
};
