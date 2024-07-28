import {Wrapper, ChordName, Table, Tr, Td, Dot, LastDot} from '../chord/chord.style.js';

export default function UkuleleChord({name, notes}) {
    const renderRow = () => (
        <Tr>
            <Td>
                {/*<Dot/>*/}
            </Td>
            <Td>
                {/*<Dot/>*/}
            </Td>
            <Td>
                {/*<Dot/>*/}
                {/*<LastDot/>*/}
            </Td>
        </Tr>
    );

    return (
        <Wrapper>
            <ChordName>{name}</ChordName>
            <Table>
                {renderRow()}
                {renderRow()}
                {renderRow()}
                {renderRow()}
            </Table>
        </Wrapper>

    )
}