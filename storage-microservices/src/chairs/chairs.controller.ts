/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ChairsService } from './chairs.service';
import { Chairs } from './schemas/chairs.schema';

@Controller('chairs')
export class ChairsController {
  constructor(private readonly chairsService: ChairsService) {}

  @Post()
  async create(@Body() createChairsDto: any): Promise<Chairs> {
    return this.chairsService.create(createChairsDto);
  }

  @Get()
  async findAll(): Promise<Chairs[]> {
    return this.chairsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Chairs> {
    return this.chairsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateChairsDto: any): Promise<Chairs> {
    return this.chairsService.update(id, updateChairsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Chairs> {
    return this.chairsService.delete(id);
  }
}
