import styled, { keyframes } from "styled-components";

interface IBold {
  bold?: boolean;
}
interface IColorsForSignInButtons {
  backgroundColor: string;
}

interface IClickedAddToBag {
  clicked: boolean;
  disabled?: boolean;
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

export const AddToBagButton = styled.button<IClickedAddToBag>`
  all: unset;
  font-size: 18px;
  color: white;
  background-color: ${props => props.clicked ? "#5fbd4a" : "black"};
  padding: 14px 0px;
  width: 180px;
  font-family: "HelveticaNeue-Light";
  letter-spacing: 1.5px;
  transition: 0.2s;
&:active {
  transform: scale(0.95);
}
`;




export const SignInButtons = styled.button<IColorsForSignInButtons>`
  all: unset;
  font-size: 16px;
  color: ${props => props.backgroundColor === "white" ? "black" : "white" };
  background-color: ${props => props.backgroundColor};
  border: ${props => props.backgroundColor === "white" ? "black 1px solid" : "none" };;
  padding: 10px 0px;
  font-family: "HelveticaNeue-Light";
  letter-spacing: 3px;
  width: 150px;
  text-align: center;

`;
