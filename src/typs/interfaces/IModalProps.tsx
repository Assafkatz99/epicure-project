import Icons from "../../typs/interfaces/ICard";
import { IDish } from "./slicersInterfaces";

interface IModalProps {
  show: boolean;
  onclick: () => void;
  dish: IDish
}

export default IModalProps;
