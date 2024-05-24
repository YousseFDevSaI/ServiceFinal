/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DesksService } from './desks.service';
import { DesksSchema } from './schemas/desks.schema';


@Controller('desks')
export class DesksController {

    constructor(private readonly desksService: DesksService) {}

    @Post()
    async create(@Body() createDeskDto: any): Promise<DesksSchema> {
      return this.desksService.create(createDeskDto);
    }
  
    @Get()
    async findAll(): Promise<DesksSchema[]> {
      return this.desksService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<DesksSchema> {
      return this.desksService.findOne(id);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDeskDto: any): Promise<DesksSchema> {
      return this.desksService.update(id, updateDeskDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<DesksSchema> {
      return this.desksService.delete(id);
    }

}
