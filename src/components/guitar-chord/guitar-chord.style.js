import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px red;
`;

export const ChordName = styled.div`
    font-size: 12px;
    display: flex;
    justify-content: center;
`;

export const Table = styled.table`
    border: solid 0.8px black;
    border-collapse: collapse;
    border-top: solid 2px black;
`;
export const Tr = styled.tr`
    border: solid 0.8px black;
    border-collapse: collapse;
`
export const Td = styled.td`
    width: 4px;
    height: 6px;
    border: solid 0.8px black;
    border-collapse: collapse;
    position: relative;
`
export const TdLast = styled.td`
    position: relative;
    border: none;
    width: 0;
`;

const dotStyle = css`
    box-sizing: border-box;
    height: 5px;
    width: 5px;
    background: #8dd4f3;
    border: solid 0.4px #06aaf3;
    border-radius: 50%;
    position: absolute;
    top: 1.5px;
`

export const Dot = styled.div`
    ${dotStyle};
    left: -2.78px;
`
export const LastDot = styled.div`
    ${dotStyle};
    right: -2.6px;
`;
