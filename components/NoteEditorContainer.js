import { connect } from "react-redux";
import NoteEditor from "./NoteEditor.jsx";

const mapStateToProps = state => ({
  counter: state.counter,
  state
});

const NoteEditorContainer = connect(mapStateToProps)(NoteEditor);

export default NoteEditorContainer;
