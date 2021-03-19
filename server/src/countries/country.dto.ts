export class CreateCountryDto {
  id?: number;
  alpha3Code: string;
  name: string;
  capital: string;
  description: string;
  lang: string;
  imgUrl: string;
  // places: {
  //     name: string;
  //     description: string;
  //     lang: string;
  // }[];
}

export class ListAllEntities {
  name?: string;
}
