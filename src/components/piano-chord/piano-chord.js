import {
    Wrapper,
    DeleteIcon,
    ChordName,
    Table,
    Tr,
    LadNumber,
} from '../chord/chord.style.js';
import {TableWrapper, Dot, PianoTd, BlackBtn} from './piano-chord.style';

const blackButtons = [
    {left: 16, position: 2},
    {left: 39, position: 4},
    {left: 84, position: 7},
    {left: 106, position: 9},
    {left: 130, position: 11},
    {left: 174, position: 14},
    {left: 196, position: 16},
    {left: 241, position: 19},
    {left: 263, position: 21},
]
const whiteButtons = [1, 3, 5, 6, 8, 10, 12, 13, 15, 17, 18, 20]

export default function PianoChord(props) {
    const renderBlackButtons = notes => {
        return (
            <div>
                {blackButtons.map(b => (
                    <BlackBtn left={b.left}>{notes.includes(b.position) && <Dot/>}</BlackBtn>
                ))
                }
            </div>
        )
    }

    const renderWhiteButtons = notes => {
        return (
            <Tr>
                {whiteButtons.map(b => (
                    <PianoTd>{notes.includes(b) && <Dot/>}</PianoTd>
                ))}
            </Tr>
        );
    }

    return (
        <Wrapper
            isSelected={props.isSelected}
            onClick={() => !props.isSelected && props.onChordSelect(props.chord.name)}
            width={294}
        >
            {props.isSelected && <DeleteIcon onClick={e => {
                e.stopPropagation();
                props.onChordDelete(props.chord.name)
            }}>X</DeleteIcon>}
            <ChordName>{props.chord.name}</ChordName>
            <LadNumber>{props.chord.ladNumber}</LadNumber>
            <TableWrapper>
                <Table isSelected={props.isSelected}>
                    {renderWhiteButtons(props.chord.notes)}
                </Table>
                {renderBlackButtons(props.chord.notes)}
            </TableWrapper>
        </Wrapper>

    )
}