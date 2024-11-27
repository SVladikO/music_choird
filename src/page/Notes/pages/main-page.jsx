import AllNotes from "../components/all-notes";
import PianoButtons from '../components/piano-buttons';
import React from "react";
import {ALL_NOTES, BASS_NOTE, TREBLE_NOTE} from "../utils";

const MainPage = props => {
    const {preparePracticePage} = props;
    return (
        <>
            <AllNotes notes={Object.keys(TREBLE_NOTE)} isTreble isShowNoteName/>
            <div className='buttons_container'>
                <div className={'button'}
                     onClick={() => preparePracticePage(Object.keys(TREBLE_NOTE), false)}>Practice
                </div>
            </div>
            <AllNotes notes={Object.keys(BASS_NOTE)} isBass isShowNoteName/>
            <div className='buttons_container'>
                <div className={'button'} onClick={() => preparePracticePage(Object.keys(BASS_NOTE), true)}>Practice
                </div>
            </div>


        </>
    )
}
export default MainPage;