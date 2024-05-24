/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StandsService } from './stands.service';
import { Stands } from './schemas/stands.schema';

@Controller('stands')
export class StandsController {
  constructor(private readonly standsService: StandsService) {}

  @Post()
  async create(@Body() createStandsDto: any): Promise<Stands> {
    return this.standsService.create(createStandsDto);
  }

  @Get()
  async findAll(): Promise<Stands[]> {
    return this.standsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Stands> {
    return this.standsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStandsDto: any): Promise<Stands> {
    return this.standsService.update(id, updateStandsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Stands> {
    return this.standsService.delete(id);
  }
}
