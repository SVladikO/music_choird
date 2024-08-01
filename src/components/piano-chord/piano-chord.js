import {
    Wrapper,
    DeleteIcon,
    ChordName,
    Table,
    Tr,
    LadNumber,
} from '../chord/chord.style.js';
import {TableWrapper, Dot, PianoTd, BlackBtn} from './piano-chord.style';

export default function PianoChord(props) {
    const renderBlackButtons = notes => {
        return (
            <div>
                <BlackBtn left={16}>{notes.includes(2) && <Dot/>}</BlackBtn>
                <BlackBtn left={39}>{notes.includes(4) && <Dot/>}</BlackBtn>
                <BlackBtn left={84}>{notes.includes(7) && <Dot/>}</BlackBtn>
                <BlackBtn left={106}>{notes.includes(9) && <Dot/>}</BlackBtn>
                <BlackBtn left={130}>{notes.includes(11) && <Dot/>}</BlackBtn>
                <BlackBtn left={174}>{notes.includes(14) && <Dot/>}</BlackBtn>
                <BlackBtn left={196}>{notes.includes(16) && <Dot/>}</BlackBtn>
                <BlackBtn left={241}>{notes.includes(19) && <Dot/>}</BlackBtn>
                <BlackBtn left={263}>{notes.includes(21) && <Dot/>}</BlackBtn>
            </div>
        )
    }
    const renderWhiteButtons = notes => {
        return (
            <Tr>
                <PianoTd>{notes.includes(1) && <Dot/>}</PianoTd>
                {/*2*/}
                <PianoTd>{notes.includes(3) && <Dot/>}</PianoTd>
                {/*4*/}
                <PianoTd>{notes.includes(5) && <Dot/>}</PianoTd>
                <PianoTd>{notes.includes(6) && <Dot/>}</PianoTd>
                {/*7*/}
                <PianoTd>{notes.includes(8) && <Dot/>}</PianoTd>
                {/*9*/}
                <PianoTd>{notes.includes(10) && <Dot/>}</PianoTd>
                {/*11*/}
                <PianoTd>{notes.includes(12) && <Dot/>}</PianoTd>
                <PianoTd>{notes.includes(13) && <Dot/>}</PianoTd>
                {/*14*/}
                <PianoTd>{notes.includes(15) && <Dot/>}</PianoTd>
                {/*16*/}
                <PianoTd>{notes.includes(17) && <Dot/>}</PianoTd>
                <PianoTd>{notes.includes(18) && <Dot/>}</PianoTd>
                {/*19*/}
                <PianoTd>{notes.includes(20) && <Dot/>}</PianoTd>
                {/*21*/}
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