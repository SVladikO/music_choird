import {
    Wrapper,
    DeleteIcon,
    ChordName,
    Table,
    Tr,
    LadNumber,
} from '../chord/chord.style.js';
import {TableWrapper, Dot, PianoTd, BlackBtn} from './piano-chord.style';

const showNumbers = false;

const blackButtons = [
    {left: 16, position: 2},
    {left: 39, position: 4},
    {left: 84, position: 7},
    {left: 106, position: 9},
    {left: 128, position: 11},
    {left: 175, position: 14},
    {left: 198, position: 16},
    {left: 242, position: 19},
    {left: 265, position: 21},
    {left: 288, position: 23},
]
const whiteButtons = [1, 3, 5, 6, 8, 10, 12, 13, 15, 17, 18, 20, 22]

export default function PianoChord(props) {
    const {chordIndex, isSelected} = props;

    const renderBlackButtons = notes => {
        return (
            <div>
                {blackButtons.map(b => (
                    <BlackBtn left={b.left}>{notes.includes(b.position) && <Dot/>}{showNumbers && b.position}</BlackBtn>
                ))}
            </div>
        )
    }

    const renderWhiteButtons = notes => {
        return (
            <Tr>
                {whiteButtons.map(b => (
                    <PianoTd>{notes.includes(b) && <Dot/>}{showNumbers && b}</PianoTd>
                ))}
            </Tr>
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
            <TableWrapper>
                <Table isSelected={isSelected}>
                    {renderWhiteButtons(props.chord.notes)}
                </Table>
                {renderBlackButtons(props.chord.notes)}
            </TableWrapper>
        </Wrapper>

    )
}