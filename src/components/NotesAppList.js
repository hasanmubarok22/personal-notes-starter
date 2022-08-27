import React from 'react';
import NotesAppItem from './NotesAppItem';

function NotesAppList({ notes, onDelete, onArchive}) {
    return (
        <div className='note-app__body'>
            <h2>Catatan Aktif</h2>
            <div className='notes-list'>
                {
                    notes.filter((note) => !note.archived).length <1 &&
                    <h2 className='notes-list__empty-message'>Tidak Ada Catatan</h2>
                }
                {
                    notes.filter((note) => !note.archived).map((note) => (
                        <NotesAppItem
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

export default NotesAppList;