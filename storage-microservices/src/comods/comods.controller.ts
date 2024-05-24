/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ComodsService } from './comods.service';
import { Comods } from './schemas/comods.schema';

@Controller('comods')
export class ComodsController {
  constructor(private readonly comodsService: ComodsService) {}

  @Post()
  async create(@Body() createComodsDto: any): Promise<Comods> {
    return this.comodsService.create(createComodsDto);
  }

  @Get()
  async findAll(): Promise<Comods[]> {
    return this.comodsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Comods> {
    return this.comodsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateComodsDto: any): Promise<Comods> {
    return this.comodsService.update(id, updateComodsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Comods> {
    return this.comodsService.delete(id);
  }
}
