import styled from "styled-components";

interface IBold {
    bold?: boolean;
}

export const White_button = styled.button<IBold>`
    all: unset;
    font-size: 18px;
    font-weight: ${(props) => props.bold == true ? "bold" : "normal"}
    `

export const AddToBagButton = styled.button<IBold>`
    all: unset;
    font-size: 18px;
    color: white;
    background-color: black;
    padding: 14px 35px;
    font-family: "HelveticaNeue-Light";
    letter-spacing: 1.5px;
    `

