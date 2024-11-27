import React from "react";

const TrainingHistory = props => {
    const notes = props.notesToGuess.map(note => {
        const bgIndex = note.guessAttempts > 2 ? 2 : note.guessAttempts;
        const bg = note.wasPassed ? `note-passed-bg${bgIndex}` : '';

        return (
            <div className={`note-passed ${bg}`} key={note.name}>
                {note.wasPassed ? note.name : '?'}
            </div>
        )
    })

    return (
        <div className='training-history'>
            {notes}
        </div>
    )
}

export default TrainingHistory;