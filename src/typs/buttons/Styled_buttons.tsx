import styled from "styled-components";

interface IBold {
    bold?: boolean;
}

export const White_button = styled.button<IBold>`
    all: unset;
    font-size: "18px";
    font-weight: ${(props) => props.bold == true ? "bold" : "normal"}
    `

