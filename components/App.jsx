import React from "react";

import NoteEditorContainer from "./NoteEditorContainer";
import NotesGridContainer from "./NotesGridContainer";
import "./App.less";

const App = () => (
  <div className="App">
    <h2 className="App__header">Список записей</h2>
    <NoteEditorContainer />
    <NotesGridContainer />
  </div>
);
export default App;
