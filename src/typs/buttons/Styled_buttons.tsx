import styled from "styled-components";

interface IBold {
  bold?: boolean;
}

export const Clean_button = styled.button<IBold>`
  all: unset;
  font-size: 18px;
  font-weight: ${(props) => (props.bold == true ? "bold" : "normal")};
`;

export const AdvancedFilterButton = styled.button`
  all: unset;
  font-size: 18px;
  height: 100%;
  padding: 0px 10px;
  &:hover{
    background-color: #D0CFCF;
  }
`

export const DishTimeSortingButton = styled.button`
  all: unset;
  font-size: 18px;
  &.noBorder{
  border: none;
  }
  &.border{
  border-bottom: #de9000 1.8px solid;
  }
`

export const AddToBagButton = styled.button`
  all: unset;
  font-size: 18px;
  color: white;
  background-color: black;
  padding: 14px 35px;
  font-family: "HelveticaNeue-Light";
  letter-spacing: 1.5px;
`;
