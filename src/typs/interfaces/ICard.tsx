interface ICard {
img: string,
name: string,
rating?: number,
chefName?:string,
dishDescription?: string,
icons?: string[],
price?: number,
class: string
}

export default ICard;