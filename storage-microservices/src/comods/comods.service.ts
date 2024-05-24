/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comods } from './schemas/comods.schema';

@Injectable()
export class ComodsService {
  constructor(@InjectModel(Comods.name) private readonly comodsModel: Model<Comods>) {}

  async create(comodsData: any): Promise<Comods> {
    const createdComods = new this.comodsModel(comodsData);
    return createdComods.save();
  }

  async findAll(): Promise<Comods[]> {
    return this.comodsModel.find().exec();
  }

  async findOne(id: string): Promise<Comods> {
    return this.comodsModel.findById(id).exec();
  }

  async update(id: string, updatedComodsData: any): Promise<Comods> {
    return this.comodsModel.findByIdAndUpdate(id, updatedComodsData, { new: true }).exec();
  }

  async delete(id: string): Promise<Comods> {
    return this.comodsModel.findOneAndDelete({ _id: id }).exec();
  }
}
