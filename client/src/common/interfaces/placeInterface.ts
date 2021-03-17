// import {IRating} from "./ratingInterface";

export interface IPlace {
  id?: number,
  alpha3Code: string,
  name: string,
  description: string,
  lang: string,
  imgUrl: string,
  // ratings?: IRating[],
}

export const emptyPlace: IPlace = {
  alpha3Code: '',
  name: '',
  description: '',
  lang: '',
  imgUrl: '',
}
