import webApi from '../webApiHelper';
import {IPlace} from "../../common/interfaces/placeInterface";

const URL = process.env.REACT_APP_BASE_API_URL + '/places';

export interface IResponseAddPlaces {
}

export const addPlaces = async (places: IPlace[]): Promise<IResponseAddPlaces> => {
  const response = (await webApi.post(URL, places)) as IResponseAddPlaces;
  return response;
}
