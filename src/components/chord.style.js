import styled, {css} from 'styled-components';

const tableStyle = css`
    border: solid 0.8px black;
    border-collapse: collapse;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${p => p.width && `min-width: ${p.width}px`};
    ${p => p.width && `max-width: ${p.width}px`};
    position: relative;
    box-sizing: border-box;
    border: solid 2px #f1f1f1;
    border-radius: 4px;
    padding: 6px 12px;

    &:hover {
        border: ${p => p.isSelected ? '' : 'solid 2px nones'};
        background: ${p => p.isSelected ? '' : ''};
        cursor: pointer;
    }

    &:active {
        background: ${p => p.isSelected ? '' : '#d6d6d6'}
    }
`;

export const DeleteIcon = styled.div`
    position: absolute;
    top: 0px;
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
    padding: 10px 0;
`;

export const PianoKeysWrapper = styled.div`
    position: relative;
`;

export const WhiteButtonsWrapper = styled.div`
    display: flex;
    //border: solid 1px blue;
`;

export const WhiteButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    
    width: 20px;
    height: 84px;
    background: ${p => p.isSelected ? '#ff6565' : 'white'};
    border: solid 1px black;
    border-width: 1px 0 1px 1px;
    border-radius: 0 0 2px 2px;
    
    &:last-child {
        border-width: 1px;
    }
`;

export const Table = styled.table`
    ${tableStyle};
    border-top: solid 2px black;
    background: ${p => p.isSelected ? 'white' : 'white'};
    width: max-content;
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
    top: -18px;
    left: ${p => p.left}px;
    font-size: 14px;
`

export const LadNumber = styled.div`
    position: absolute;
    left: -2px;
    top: 40px;
`;
