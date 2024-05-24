/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stands } from './schemas/stands.schema';

@Injectable()
export class StandsService {
  constructor(@InjectModel(Stands.name) private readonly standsModel: Model<Stands>) {}

  async create(standsData: any): Promise<Stands> {
    const createdStands = new this.standsModel(standsData);
    return createdStands.save();
  }

  async findAll(): Promise<Stands[]> {
    return this.standsModel.find().exec();
  }

  async findOne(id: string): Promise<Stands> {
    return this.standsModel.findById(id).exec();
  }

  async update(id: string, updatedStandsData: any): Promise<Stands> {
    return this.standsModel.findByIdAndUpdate(id, updatedStandsData, { new: true }).exec();
  }

  async delete(id: string): Promise<Stands> {
    return this.standsModel.findOneAndDelete({ _id: id }).exec();
  }
}
