import React from "react";
import {TREBLE_NOTE} from '../note-utils.js';

const NotePresentation = props => {
    const {notesToGuessInit, changeNoteVisibility} = props;

    const notesToPresent =
        Object.keys(TREBLE_NOTE).map((note, index) => (
            <div
                key={note}
                className={`one_note_presentation ${notesToGuessInit[index] && 'one_note_presentation_selected'}`}
                onClick={() => changeNoteVisibility(index)}
            >
                <div>{note}</div>
            </div>
        ))

    return (
        <div className='notes_presentation_container'>
            {notesToPresent}
        </div>
    )
}

export default NotePresentation;