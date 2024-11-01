import styled from "styled-components";


export const Wrapper = styled.div`
    margin: 0 auto;
    width: fit-content;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 1;
    border: solid 1px black;
`;

export const Tab = styled.div`
    //border: solid 2px red;
    cursor: pointer;
    border-radius: 0;
    font-size: 20px;
    padding: 4px 8px;
    color: ${p => p.isSelected ? 'white' : 'black'};
    background: ${p => p.isSelected ? 'black' : '#efeded'};
    
`;
