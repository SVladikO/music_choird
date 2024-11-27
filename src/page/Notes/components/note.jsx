import React from "react";

const Note = props => {
    const {note, style, isShowNoteName} = props

    return (
            <div className={`note note-${note}`} style={style} key={note}>
                <div className='note-circle'></div>
                <div className='note-line'></div>
                <div className='note-line1'></div>
                <div className='note-line2'></div>
                <div className='note-line3'></div>
                <div className='note-line4'></div>
                <div className='note-name'>{isShowNoteName ? note : ''}</div>
            </div>
        )
}

export default Note;
