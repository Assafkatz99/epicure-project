import Icons from "../../typs/interfaces/ICard";

interface IModalProps {
    show: boolean;
    onclick: () => void;
    dish: IModalDish
  }
  interface IModalDish{
    changes:Array<string>
    icons: Icons 
    id:number
    img_url:string
    ingredients: Array<string>
    name:string
    price: number
    sides:Array<string>
  }
  export default IModalProps;