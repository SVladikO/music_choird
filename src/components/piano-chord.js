import {
    Wrapper,
    DeleteIcon,
    ChordName,
    WhiteButtonsWrapper,
    WhiteButton,
    LadNumber, PianoKeysWrapper,
} from './chord.style.js';
import {Dot, BlackBtn} from './piano-chord.style';

const showNumbers = false;

const blackButtons = [
    {left: 16, position: 2},
    {left: 36, position: 4},
    {left: 78, position: 7},
    {left: 99, position: 9},
    {left: 120, position: 11},
    {left: 161, position: 14},
    {left: 183, position: 16},
    {left: 225, position: 19},
    {left: 246, position: 21},
    {left: 265, position: 23},
]
const whiteButtons = [1, 3, 5, 6, 8, 10, 12, 13, 15, 17, 18, 20, 22]
const whiteChordNames = ['C', 'D','E', 'F', 'G', 'A', 'B', 'C', 'D','E', 'F', 'G', 'A']

export default function PianoChord(props) {
    const {chordIndex, isSelected} = props;

    const renderBlackButtons = notes => {
        return (
            <div>
                {blackButtons.map(b =>
                    <BlackBtn left={b.left} isSelected={notes.includes(b.position)} />
                )}
            </div>
        )
    }

    const renderWhiteButtons = notes => {
        return (
            <WhiteButtonsWrapper>
                {whiteButtons.map((num, index) => <WhiteButton isSelected={notes.includes(num)}>{whiteChordNames[index]}</WhiteButton>)}
            </WhiteButtonsWrapper>
        );
    }

    return (
        <Wrapper
            isSelected={isSelected}
            onClick={() => !isSelected && props.onChordSelect(props.chord.name)}
            width={320}
        >
            {isSelected && <DeleteIcon onClick={e => {
                e.stopPropagation();
                props.onChordDelete(chordIndex)
            }}>X</DeleteIcon>}
            <ChordName>{props.chord.name}</ChordName>
            <LadNumber>{props.chord.ladNumber}</LadNumber>
            <PianoKeysWrapper>
                <div isSelected={isSelected}>
                    {renderWhiteButtons(props.chord.notes)}
                </div>
                {renderBlackButtons(props.chord.notes)}
            </PianoKeysWrapper>
        </Wrapper>

    )
}