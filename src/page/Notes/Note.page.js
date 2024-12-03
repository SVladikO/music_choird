import React, {useState} from "react";
import './App.css';
import {TREBLE_NOTE, mixArray, prepareNotes, clearNotesHistory, ALL_NOTES} from '../../note-utils.js';

import MainPage from '../../sub-page/main-page.jsx';
import PracticePage from '../../sub-page/practice-page.jsx';
import TheEndPage from '../../sub-page/end-page.jsx';

function NotePage() {
    const [isBassNoteType, setIsBassNoteType] = useState(false);
    const [notesToGuess, setNotesToGuess] = useState(prepareNotes(mixArray(Object.keys(ALL_NOTES))));
    const [notesToGuessMixed, setNotesToGuessMixed] = useState(prepareNotes(mixArray(Object.keys(ALL_NOTES))));
    const [isMainPage, setIsMainPage] = useState(true)
    const [isPracticePage, setIsPracticePage] = useState(false)

    const prepareMainPage = () => {
        setIsMainPage(true);
        setIsPracticePage(false)
        setNotesToGuessMixed(prepareNotes(mixArray(Object.keys(TREBLE_NOTE))));
    }

    const preparePracticePage = (notes, isBassNoteType) => {
        setIsMainPage(false)
        setIsPracticePage(true)
        setNotesToGuess(notes);
        setNotesToGuessMixed(prepareNotes(mixArray(notes)));
        setIsBassNoteType(isBassNoteType)
    }

    const isTheEndPage = notesToGuessMixed.every(note => note.wasPassed);

    return (
        <div className={'page'}>
            <h2>Music Notation Quiz</h2>
            {isMainPage && <MainPage preparePracticePage={preparePracticePage}/>}
            {isPracticePage && !isTheEndPage &&
                <PracticePage
                    notesToGuess={notesToGuess}
                    isBassNoteType={isBassNoteType}
                    notesToGuessMixed={notesToGuessMixed}
                    setNotesToGuessMixed={setNotesToGuessMixed}
                    prepareMainPage={prepareMainPage}
                />
            }
            {isTheEndPage &&
                <TheEndPage
                    notesToGuess={notesToGuessMixed}
                    prepareMainPage={prepareMainPage}
                />}
        </div>
    );
}

export default NotePage;
