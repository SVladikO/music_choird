import styled, {css} from "styled-components";


export const TableWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const tableStyle = css`
    border: solid 0.8px black;
    border-collapse: collapse;
`;

export const BlackBtn = styled.div`
    width: 8px;
    height: 36px;
    ${tableStyle};
    background: black;
    position: absolute;
    top: 0;
    left: ${p => p.left || 0}px;
    color: red;
    font-size: 6px;
`;

export const PianoTd = styled.td`
    ${tableStyle};
    width: 12px;
    height: 44px;
    color: red;
    font-size: 6px;
    text-align: center;
`;
