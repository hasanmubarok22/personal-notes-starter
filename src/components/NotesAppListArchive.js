import React from 'react';
import NotesAppItemArchive from './NotesAppItemArchive';

function NotesAppListArchive({ notes, onDelete, onArchive }) {
    return (
        <div className='note-app__body'>
            <h2>Arsip</h2>
            <div className='notes-list'>
                {
                    notes.filter((note) => note.archived).map((note) => (
                        <NotesAppItemArchive
                            {...note}
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                        />
                    ))
                }
            </div>
        </div>
    );

}

export default NotesAppListArchive;