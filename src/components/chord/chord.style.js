import styled, {css} from 'styled-components';

const tableStyle = css`
    border: solid 0.8px black;
    border-collapse: collapse;
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 86px;
    position: relative;
`;

export const ChordName = styled.div`
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding: 25px 10px 15px;
`;

export const Table = styled.table`
    ${tableStyle};
    border-top: solid 2px black;
`;

export const Tr = styled.tr`
    ${tableStyle};
`;

export const Td = styled.td`
    width: 14px;
    height: 20px;
    ${tableStyle};
    position: relative;
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
export const LadNumber = styled.div`
    position: absolute;
    left: -16px;
    top: 54px;
`;
