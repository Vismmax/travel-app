export class CreateCountryDto {
    name: string;
    capital: string;
    description: string;
    lang: string;
    // places: {
    //     name: string;
    //     description: string;
    //     lang: string;
    // }[];
}

export class ListAllEntities {
    name?: string;
}