import React from "react";

import {ReactComponent as BassClefIcon} from "../icon/bass-clef.svg";
import {ReactComponent as TrebleClefIcon} from "../icon/treble-clef.svg";

const NotesSheet = props => {
    const {isBass, isTreble} = props;

    return (
        <div class="note-presentation-container">
            {isBass && <BassClefIcon/>}
            {isTreble && <TrebleClefIcon/>}
            <div className={`lines ${props.isWrongGuess && 'wrong-guess'}`}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                {props.children}
            </div>
        </div>
    )
}

export default NotesSheet;