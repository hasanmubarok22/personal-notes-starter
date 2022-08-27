import React from 'react';

class NotesAppHeader extends React.Component {

    render() {
        return (
            <div className="note-app__header">
                <h1>Notes App</h1>
                <input type='text' placeholder="Search" onChange={this.props.searchNotes}></input>
            </div>


        );
    }
}

export default NotesAppHeader;