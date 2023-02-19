interface ICard {
img: string,
name: string,
rating?: number,
chefName?:string,
dishDescription?: string[],
icons?: Icons,
price?: number,
class: string,
onclick?: any
}

interface Icons{
    "isSpicy" : boolean,
    "isVegan" : boolean,
    "isVegitarian" : boolean ,
}


export default ICard;

'assets/icons/dishes_types_icons/Spicy.svg'
'assets/icons/dishes_types_icons/Vegan.svg'
'assets/icons/dishes_types_icons/Vegitarian.svg'