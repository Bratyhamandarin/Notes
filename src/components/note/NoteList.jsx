import React from 'react';
import { NoteItem } from './';

export const NoteList = (props) => {
  return (
    <div className="col-xs-12 col-sm-9 col-md-9">
      <h4>Лист заметок</h4>
      <ul>
        {props.notes.map((note, index) => (
          <NoteItem
            handleRemove={props.handleRemove}
            handleToggle={props.handleToggle}
            handleChange={props.handleChange}
            key={note.id}
            index={index}
            {...note}
          />
        ))}
      </ul>
    </div>
  );
};
