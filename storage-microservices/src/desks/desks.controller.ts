/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { DesksService } from './desks.service';


@Controller('desks')
export class DesksController {

    constructor(private readonly DeskService: DesksService) {}

    @Get()
    getData(): string {
        return this.DeskService.getData();
    }

}
