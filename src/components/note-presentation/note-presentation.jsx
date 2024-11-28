import React from "react";
import NotesSheet from './notes-sheet.jsx';
import Note from "./note";

const NotePresentation = props => {
    const {noteName, isBass, isTreble, isShowNoteName} = props;
    console.log('NotePresentation', {isBass, isTreble})
    return (
        <NotesSheet isBass={isBass} isTreble={isTreble}>
            <Note  key={noteName} style={{left: '50%'}} note={noteName} isShowNoteName={isShowNoteName}/>
        </NotesSheet>
    )
}

export default NotePresentation;