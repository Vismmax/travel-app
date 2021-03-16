import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { Express } from 'express'
import {ImgsService} from "./imgs.service";
import {UploadImgDto} from "./upload.img.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('imgs')
export class ImgsController {
  constructor(private imgsService: ImgsService) {
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const img = await this.imgsService.uploadToImgur(file);
    return img;
  }
}
