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
    
    ${tableStyle};
    background: black;
    position: absolute;
    top: 0;
    left: ${p => p.left || 0}px;
    color: red;
    font-size: 6px;
    display: flex;
    align-items: end;
    justify-content: center;
    width: 12px;
    height: 64px;
`;

export const Dot = styled.div`
    box-sizing: border-box;
    height: 10px;
    width: 10px;
    background: #ff2929;
    border: solid 0.8px #000000;
    border-radius: 50%;
    margin: 0 auto 4px;
`;
export const PianoTd = styled.td`
    ${tableStyle};
    width: 20px;
    height: 90px;
    color: red;
    font-size: 6px;
    text-align: center;
    vertical-align: bottom;

`;
