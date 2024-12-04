import React, {useState} from "react";

import TrainingHistory from "../components/training-history.jsx";
import NotePresentation from "../components/note-presentation.jsx";
import PianoButtons from "../components/piano-buttons.jsx";
import Checkbox from "../components/checkbox.jsx";
import { CheckboxWrapper } from "./practice-page.style";

const PracticePage = props => {
    const {
        isBassNoteType,
        notesToGuess,
        notesToGuessMixed,
        setNotesToGuessMixed,
        prepareMainPage,
    } = props;

    const [noteGuessIndex, setNoteGuessIndex] = useState(0)
    const [isShowNoteName, setIsShowNoteName] = useState(true)

    const checkNote = key => {
        const note = notesToGuessMixed[noteGuessIndex]
        if (key === note.name) {
            notesToGuessMixed[noteGuessIndex].wasPassed = true;
            setNotesToGuessMixed([...notesToGuessMixed])
            setNoteGuessIndex(noteGuessIndex + 1)
        } else {
            notesToGuessMixed[noteGuessIndex].guessAttempts += 1;
            setNotesToGuessMixed([...notesToGuessMixed])
        }
    }

    const guessNoteName = notesToGuessMixed[noteGuessIndex].name

    return (
        <>
            <TrainingHistory notesToGuess={notesToGuessMixed}/>
            <NotePresentation
                noteName={guessNoteName}
                isTreble={!isBassNoteType}
                isBass={isBassNoteType}
                isShowNoteName={isShowNoteName}
            />
            <PianoButtons checkNote={checkNote} isShowName={isShowNoteName} noteNames={notesToGuess}/>
            <CheckboxWrapper>
                <Checkbox
                    value={isShowNoteName}
                    onChange={() => setIsShowNoteName(!isShowNoteName)}
                    label={'Show note names'}
                />
            </CheckboxWrapper>
            <div className='buttons_container'>
                <div className={'button'} onClick={prepareMainPage}>MAIN PAGE</div>
            </div>
        </>
    )
}

export default PracticePage;