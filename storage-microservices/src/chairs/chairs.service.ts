/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chairs } from './schemas/chairs.schema';

@Injectable()
export class ChairsService {
  constructor(@InjectModel(Chairs.name) private readonly chairsModel: Model<Chairs>) {}

  async create(chairsData: any): Promise<Chairs> {
    const createdChairs = new this.chairsModel(chairsData);
    return createdChairs.save();
  }

  async findAll(): Promise<Chairs[]> {
    return this.chairsModel.find().exec();
  }

  async findOne(id: string): Promise<Chairs> {
    return this.chairsModel.findById(id).exec();
  }

  async update(id: string, updatedChairsData: any): Promise<Chairs> {
    return this.chairsModel.findByIdAndUpdate(id, updatedChairsData, { new: true }).exec();
  }

  async delete(id: string): Promise<Chairs> {
    return this.chairsModel.findOneAndDelete({ _id: id }).exec();
  }
}
