import webApi from '../webApiHelper';

const URL = process.env.REACT_APP_BASE_API_URL + '/imgs';

// const URL = '/imgs';

interface IResponse {
  link: string;
  deleteHash: string;
}

export const uploadImage = async (image: Blob): Promise<string> => {
  const response = (await webApi.image(URL, image)) as IResponse;
  return response.link;
};
