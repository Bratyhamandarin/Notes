import React, { Component } from 'react';
import logo from './logo.svg';
import { NoteList } from './components/note';
import {
  addNote,
  generateId,
  findById,
  toggleNote,
  updateNote,
  removeNote,
  updateText,
} from './utils/noteHelpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      menuCollapsed: true,
    };
  }

  handleToggle = (id) => {
    const note = findById(id, this.state.notes);
    const toggled = toggleNote(note);
    const updatedNotes = updateNote(this.state.notes, toggled);
    this.setState({ notes: updatedNotes });
  };

  handleRemove = (id) => {
    const updatedNotes = removeNote(this.state.notes, id);
    this.setState({ notes: updatedNotes });
  };

  handleChange = (id, value) => {
    const note = findById(id, this.state.notes);
    const updated = updateText(note, value);
    const updatedNotes = updateNote(this.state.notes, updated);
    this.setState({ notes: updatedNotes });
  };

  handleSubmit = () => {
    const newId = generateId();
    const newNote = { id: newId, noteText: '', isDisabled: false };
    const updatedNotes = addNote(this.state.notes, newNote);
    this.setState({
      notes: updatedNotes,
    });
  };

  hideMenu = () => {
    this.setState({
      menuCollapsed: true,
    });
  };

  showMenu = () => {
    this.setState({
      menuCollapsed: false,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-3 col-md-3">
            <aside>
              <button onClick={this.showMenu} className="btn btn-primary btn-block open">
                Открыть меню
              </button>
              {this.state.menuCollapsed ? null : (
                <div className="menu_opt">
                  <button onClick={this.handleSubmit} className="btn btn-primary btn-block">
                    Добавить заметку
                  </button>
                  <button onClick={this.hideMenu} className="btn btn-primary btn-block">
                    Закрыть меню
                  </button>
                </div>
              )}
            </aside>
          </div>
          <NoteList
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
            handleChange={this.handleChange}
            notes={this.state.notes}
          />
        </div>
      </div>
    );
  }
}

export default App;
