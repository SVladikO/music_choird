import React from "react";
import NotesSheet from './notes-sheet.jsx';
import {TREBLE_NOTE} from '../note-utils.js';
import Note from "./note.jsx";

const AllNotes = props => {
    const {
        notes = Object.keys(TREBLE_NOTE),
        leftFrom = 0,
        isBass,
        isTreble,
        isShowNoteName
    } = props

    const allNotes =
        notes.map((note, index) =>
            <Note  key={note} style={{left: (leftFrom + index * 26) + 'px'}} note={note} isShowNoteName={isShowNoteName}/>
        )

    return (
        <NotesSheet isBass={isBass} isTreble={isTreble}>{allNotes}</NotesSheet>
    )
}

export default AllNotes;
