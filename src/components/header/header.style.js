import styled from "styled-components";

export const Wrapper = styled.div`
    height: 50px;
    width: 100%;
    background: black;
    margin: 0 0 10px 0;
    display: flex;
`;

export const Logo = styled.pre`
    color: #adffae;
    font-size: 19px;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0 200px 0 20px;
`;

export const Item = styled.div`
    background: ${p => p.isSelected ? '#cecdcd' : 'none'};
    color: ${p => p.isSelected ? '#000' : '#cecdcd'};
    height: 100%;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    border-right: solid 0.5px #434343;

    &:hover {
        background: #afafaf;
        color: black;
    }

    & > svg {
        margin: 0 0 0 4px;
    }

`;