import React from "react";
import PropTypes from "prop-types";
import { DoFetch } from "../actions";
import Note from "./Note.jsx";
import "./NotesGrid.less";

export default class NotesGrid extends React.Component {
  componentDidMount() {
    DoFetch(this.props.state, this.props.dispatch, "default");
  }
  render() {
    return (
      <div className="NotesGrid">
        <ul id="NotesList">
          {this.props.notes.map(note => (
            <li key={note.ID} className="ListItem">
              <Note
                title={note.Title}
                onDelete={() =>
                  DoFetch(
                    this.props.state,
                    this.props.dispatch,
                    "delete",
                    note
                  )}
                color={note.Color}
              >
                {note.Text}

              </Note>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
NotesGrid.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      color: PropTypes.string
    })
  )
};
