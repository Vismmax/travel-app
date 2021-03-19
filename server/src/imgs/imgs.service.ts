import {Injectable} from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ImgsService {
  async uploadToImgur(file) {
    try {
      const {data: {data}} = await axios.post(
        'https://api.imgur.com/3/image',
        {
          image: file.buffer.toString('base64'),
          type: 'base64',
        }, {
          headers: {
            Authorization: `Client-ID ${process.env.IMGUR_ID}`
          }
        }
      );
      return {
        link: data.link,
        deleteHash: data.deletehash
      };
    } catch ({response: {data: {status, data}}}) {
      return Promise.reject({status, message: data.error});
    }
  };
}
