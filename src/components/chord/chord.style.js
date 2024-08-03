import styled, {css} from 'styled-components';

const tableStyle = css`
    border: solid 0.8px black;
    border-collapse: collapse;
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
     ${p => `min-width: ${p.width}px`};
     ${p => `max-width: ${p.width}px`};
    position: relative;
    box-sizing: border-box;
    border: solid 2px white;
    border-radius: 4px;
    padding: 6px 10px;
    //background: mediumseagreen;

    &:hover {
        border: ${p => !p.isSelected ? 'solid 2px darkgreen' : ''};
        background: ${p => !p.isSelected ? 'mediumseagreen' : ''};
        cursor: pointer;
    }
`;

export const DeleteIcon = styled.div`
    position: absolute;
    right: 0px;
    color: #a8a7a7;
    border: solid 1px #a8a7a7;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;
export const ChordName = styled.div`
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding: 10px;
`;

export const Table = styled.table`
    ${tableStyle};
    border-top: solid 2px black;
    background: ${p => p.isSelected ? '#ffd800' : ''};
`;

export const Tr = styled.tr`
    ${tableStyle};
`;

export const Td = styled.td`
    ${tableStyle};
    position: relative;
    min-width: 14px;
    max-width: 14px;
    height: 20px;
`;

export const TdLast = styled.td`
    position: relative;
    border: none;
    width: 0;
`;

const dotStyle = css`
    box-sizing: border-box;
    height: 10px;
    width: 10px;
    background: #696666;
    border: solid 0.8px #000000;
    border-radius: 50%;
    position: absolute;
    top: 5.5px;
`;

export const Dot = styled.div`
    ${dotStyle};
    left: -5.5px;
`;

export const LastDot = styled.div`
    ${dotStyle};
    right: -4.8px;
`;

export const XO = styled.div`
    position: absolute;
    top: -20px;
    left: ${p => p.left}px;
    font-size: 14px;
`

export const LadNumber = styled.div`
    position: absolute;
    left: -2px;
    top: 40px;
`;
