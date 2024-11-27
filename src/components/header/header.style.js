import styled from "styled-components";

export const Wrapper = styled.div`
    height: 50px;
    width: 100%;
    background: black;
    margin: 0 0 10px 0;
    display: flex;
`;

export const Logo = styled.div`
    color: black;
    font-size: 19px;
    background: #adffae;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 80%;
    box-sizing: border-box;
    margin: 5px 80px 0 20px;
    cursor: pointer;
`;

export const Item = styled.div`
    color: #cecdcd;
    height: 100%;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    border-right: solid 0.5px #434343;

    &:hover {
        background: #cecdcd;
        color: black;
    }

    & > svg {
        margin: 0 0 0 4px;
    }

`;