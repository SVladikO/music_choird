import {ChordName, DeleteIcon, Dot, LadNumber, LastDot, Table, Td, Tr, Wrapper, XO} from "./chord.style";

export default function Chord(props) {
    const {headerNotes} = props.chord;
    const {chordIndex, isSelected, isGuitar} = props;

    /**
     * We need to show which string don't touch for some chords that's why need to add extra layer above strings
     * x o o x x x
     * 6 5 4 3 2 1
     *
     * @param ix 1, 3, 5, 7, 9, 11
     * @param io 2, 4, 6, 8, 10, 12
     * @param isLast
     * @returns {JSX.Element}
     */
    const getXO = (ix, io, isLast = false) => (
        <XO left={isLast ? 12 : -4}>
            {headerNotes.includes(ix) ? 'x' : headerNotes.includes(io) ? 'o' : ''}
        </XO>
    )

    /**
     * Guitar has 6 strings.
     * Ukulele has 4 strings.
     * We calculate strings form right to left. 6 5 4 3 2 1
     * [[6, 5, 4, 3, 2, 1], [6, 5, 4, 3, 2, 1]]
     *
     * @param notes Example Am [[2], [4, 3]]
     * @param isFirstRow
     * @returns {JSX.Element}
     */
    const renderRow = (notes, isFirstRow) => {
        const getDot = i => notes.includes(i) ? <Dot/> : null;

        return (
            <Tr>
                {isGuitar && (
                    <Td>
                        {getDot(6)}
                        {isFirstRow && getXO(11, 12)}
                    </Td>
                )}
                {isGuitar && (
                    <Td>
                        {getDot(5)}
                        {isFirstRow && getXO(9, 10)}
                    </Td>
                )}
                <Td>
                    {getDot(4)}
                    {isFirstRow && getXO(7, 8)}
                </Td>
                <Td>
                    {getDot(3)}
                    {isFirstRow && getXO(5, 6)}
                </Td>
                <Td>
                    {getDot(2)}
                    {notes.includes(1) && <LastDot/>}
                    {isFirstRow && getXO(3, 4)}
                    {isFirstRow && getXO(1, 2, true)}
                </Td>
            </Tr>
        );
    }

    return (
        <Wrapper
            isSelected={isSelected}
            onClick={() => !isSelected && props.onChordSelect(props.chord.name)}
        >
            {isSelected && <DeleteIcon onClick={e => {
                e.stopPropagation();
                props.onChordDelete(chordIndex)
            }}>X</DeleteIcon>}
            <ChordName>{props.chord.name}</ChordName>
            <LadNumber>{props.chord.ladNumber}</LadNumber>
            <Table isSelected={isSelected}>
                {props.chord.notes.map((n, index) => renderRow(n, index === 0))}
            </Table>
        </Wrapper>

    )
}