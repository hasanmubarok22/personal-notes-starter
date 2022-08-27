import React from 'react';
import NotesAppHeader from './NotesAppHeader';
import NotesAppInput from './NotesAppInput';
import NotesAppList from './NotesAppList';
import NotesAppListArchive from './NotesAppListArchive';

import { getInitialData } from '../utils/index';



class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            search:"",
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this)
        this.onSearchNotes = this.onSearchNotes.bind(this)
    }

    onDeleteHandler(id){
        const notes =this.state.notes.filter(note => note.id !==id);
        this.setState({ notes })
    }

    onArchiveHandler(id){
        const notes = this.state.notes.map(note =>{
            if (note.id === id) {
                note.archived = !note.archived
            }
            return note;
        })
        this.setState({ notes })
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt:new Date(),
                        archived:false,
                    }
                ]
            }
        });
    }

    onSearchNotes(note){
        this.setState({
            search:note.target.value
        })
    }


    render() {
        return (
            <div className="note-app__body">
                <NotesAppHeader searchNotes={this.onSearchNotes}/>
                <br></br>
                <NotesAppInput addNotes={this.onAddNotesHandler}/>
                <NotesAppList
                notes={this.state.notes.filter((note) =>
                    note.title.toLowerCase().includes(this.state.search.toLowerCase()))}
                // notes={this.state.notes} 
                onDelete={this.onDeleteHandler} 
                onArchive={this.onArchiveHandler} />
                <NotesAppListArchive 
                notes={this.state.notes.filter((note) =>
                        note.title.toLowerCase().includes(this.state.search.toLowerCase()))} 
                        // notes={this.state.notes} 
                onDelete={this.onDeleteHandler} 
                onArchive={this.onArchiveHandler} />
            </div>
        );
    }
}

export default NotesApp;