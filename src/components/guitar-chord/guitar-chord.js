import {Wrapper, ChordName, Table, Tr, Td, Dot, LastDot, LadNumber} from '../chord/chord.style.js';

export default function GuitarChord(props) {
    const renderRow = notes => {
        console.log({notes})
        return(
            <Tr>
                {props.showString6 && <Td>{notes.includes(6) && <Dot/>}</Td>}
                {props.showString5 && <Td>{notes.includes(5) && <Dot/>}</Td>}
                <Td>{notes.includes(4) && <Dot/>}</Td>
                <Td>{notes.includes(3) && <Dot/>}</Td>
                <Td>
                    {notes.includes(2) && <Dot/>}
                    {notes.includes(1) && <LastDot/>}
                </Td>
            </Tr>
        );
    }

    return (
        <Wrapper onClick={() => props.onChordSelect(props.chord.name)}>
            <ChordName>{props.chord.name}</ChordName>
            <LadNumber>{props.chord.ladNumber}</LadNumber>
            <Table>
                {props.chord.notes.map(n=> renderRow(n))}
            </Table>
        </Wrapper>

    )
}