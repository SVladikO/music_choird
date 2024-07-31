import {
    Wrapper,
    DeleteIcon,
    ChordName,
    Table,
    Tr,
    Dot,
    LadNumber,
} from '../chord/chord.style.js';
import {TableWrapper, PianoTd, BlackBtn} from './piano-chord.style';

export default function PianoChord(props) {
    const renderBlackButtons = notes => {
        return (
            <div>
                <BlackBtn left={10} is={notes.includes(2)}>{2}</BlackBtn>
                <BlackBtn left={25} is={notes.includes(4)}>{4}</BlackBtn>
                <BlackBtn left={54} is={notes.includes(7)}>{7}</BlackBtn>
                <BlackBtn left={69} is={notes.includes(9)}>{9}</BlackBtn>
                <BlackBtn left={83} is={notes.includes(11)}>{11}</BlackBtn>
                <BlackBtn left={112} is={notes.includes(14)}>{14}</BlackBtn>
                <BlackBtn left={127} is={notes.includes(16)}>{16}</BlackBtn>
                <BlackBtn left={155} is={notes.includes(19)}>{19}</BlackBtn>
                <BlackBtn left={170} is={notes.includes(21)}>{21}</BlackBtn>
            </div>
        )
    }
    const renderWhiteButtons = notes => {
        return (
            <Tr>
                <PianoTd is={notes.includes(1)}>1</PianoTd>
                {/*2*/}
                <PianoTd is={notes.includes(3)}>3</PianoTd>
                {/*4*/}
                <PianoTd is={notes.includes(5)}>5</PianoTd>
                <PianoTd is={notes.includes(6)}>6</PianoTd>
                {/*7*/}
                <PianoTd is={notes.includes(8)}>8</PianoTd>
                {/*9*/}
                <PianoTd is={notes.includes(10)}>10</PianoTd>
                {/*11*/}
                <PianoTd is={notes.includes(12)}>12</PianoTd>
                <PianoTd is={notes.includes(13)}>13</PianoTd>
                {/*14*/}
                <PianoTd is={notes.includes(15)}>15</PianoTd>
                {/*16*/}
                <PianoTd is={notes.includes(17)}>17</PianoTd>
                <PianoTd is={notes.includes(18)}>18</PianoTd>
                {/*19*/}
                <PianoTd is={notes.includes(20)}>20</PianoTd>
                {/*21*/}
            </Tr>
        );
    }

    return (
        <Wrapper
            isSelected={props.isSelected}
            onClick={() => !props.isSelected && props.onChordSelect(props.chord.name)}
            width={200}
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