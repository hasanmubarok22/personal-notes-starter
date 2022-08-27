import React from 'react';

class NotesAppInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            charLimit:50
        }

        this.onJudulChangeNotesHandler = this.onJudulChangeNotesHandler.bind(this);
        this.onBodyChangeNotesHandler = this.onBodyChangeNotesHandler.bind(this);
        this.onSubmitNotesHandler = this.onSubmitNotesHandler.bind(this);
    }

    onJudulChangeNotesHandler(note) {
        this.setState(() => {
            return {
                title: note.target.value.substring(0,this.state.charLimit),
            }
        });
    }

    onBodyChangeNotesHandler(note) {
        this.setState(() => {
            return {
                body: note.target.value,
            }
        });
    }

    onSubmitNotesHandler(note) {
        note.preventDefault();
        this.props.addNotes(this.state);
    }


    render() {
        return (
            <div className='note-input'>
                <h1 className='note-input__title'> Buat Catatan </h1>
                <p className='note-input__title__char-limit'>{this.state.charLimit-this.state.title.length}</p>
                <form onSubmit={this.onSubmitNotesHandler}>
                    <div className='note-input__body'>
                        <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onJudulChangeNotesHandler}/>
                        <textarea placeholder="Ketik disini..." value={this.state.body} onChange={this.onBodyChangeNotesHandler}/>
                        <button type="submit">Buat</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NotesAppInput;