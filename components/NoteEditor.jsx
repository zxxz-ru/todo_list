import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "./ColorPicker.jsx";
import { DoFetch, FilterNote } from "../actions";

import "./NoteEditor.less";

export default class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.state = {
      title: "",
      text: "",
      color: "#FFFFFF"
    };
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  handleTextChange(event) {
    const str = event.target.value;
    if (str.length < 301) {
      this.setState({ text: str });
    }
  }

  handleTitleChange(event) {
    const str = event.target.value;
    if (str.length < 51) {
      this.setState({ title: str });
    }
  }

  handleColorChange(color) {
    this.setState({ color });
  }

  handleAddNote() {
    let title = this.state.title;
    title = title.slice(0, 51);
    let text = this.state.text;
    text = text.slice(0, 301);
    const color = this.state.color;
    const note = { title, text, color };
    DoFetch(this.props.state, this.props.dispatch, "save", note);
    this.setState({ text: "", title: "" });
  }

  handleFilter() {
    this.dispatch(FilterNote(this.state.color));
  }

  resetFilter() {
    this.dispatch(FilterNote(null));
  }

  render() {
    return (
      <div className="NoteEditor">
        <input
          type="text"
          className="NoteEditor__title"
          placeholder="Enter title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea
          placeholder="Enter note text"
          rows={2}
          className="NoteEditor__text"
          value={this.state.text}
          onChange={this.handleTextChange}
        />

        <div className="NoteEditor__footer row">
          <div className="col-xs-12 col-sm-8 hor-centered">
            <ColorPicker
              value={this.state.color}
              onChange={this.handleColorChange}
              counter={this.props.counter}
            />
          </div>
          <div className="col-xs-12 col-sm-4 hor-centered">
            <button className="NoteEditor__button" onClick={this.handleAddNote}>
              Добавить
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-8 hor-centered">
            <button
              className="NoteEditor__button_filter"
              onClick={this.handleFilter}
            >
              Фильтр
            </button>
            <button
              className="NoteEditor__button_filter"
              onClick={this.resetFilter}
            >
              Сбросить
            </button>
          </div>
        </div>

      </div>
    );
  }
}

NoteEditor.PropTypes = {
  counter: PropTypes.shape({
    color: PropTypes.number
  })
};
