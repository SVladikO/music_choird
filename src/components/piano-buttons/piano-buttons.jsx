import {BASS_NOTE, TREBLE_NOTE} from "../../note-utils.js";

const blackButtonIndexes = [2, 3, 5, 6, 7, 9, 10, 12, 13, 14, 16, 17, 19, 20, 21, 23, 24, 26, 27, 28]

const PianoButtons = ({
                          checkNote = () => {},
                          isShowName = false,
                          noteNames,
                      }) => {
    return (
        <div className='piano_container'>
            <div className='one_octava'>
                {noteNames.map((key, index) => (
                    <div className='one_octava_white_button' onClick={() => checkNote(key)} key={key}>
                        {isShowName && key}
                        {blackButtonIndexes.includes(index + 1) && <div className='one_octava_black_button'></div>}
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default PianoButtons;