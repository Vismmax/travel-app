import {Body, Controller, Post} from '@nestjs/common';
import {ImgsService} from "./imgs.service";
import {UploadImgDto} from "./upload.img.dto";

@Controller('imgs')
export class ImgsController {
    constructor(private imgsService: ImgsService) {}

    @Post()
    create(@Body() uploadImgDto: UploadImgDto): Promise<{link: string, deleteHash: string}> {
        return this.imgsService.uploadToImgur(uploadImgDto.file);
    }
}
