import FoodType from './FoodType'

interface IDishCard{
    img: string,
    name: string,
    foodType: FoodType[],
    ingredients: string[],
    price: number
}

export default IDishCard;
