/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DesksSchema } from './schemas/desks.schema';

@Injectable()
export class DesksService {

  constructor(@InjectModel(DesksSchema.name) private readonly deskModel: Model<DesksSchema>) {}


  async create(deskData: any): Promise<DesksSchema> {
    const createdDesk = new this.deskModel(deskData);
    return createdDesk.save();
  }

  async findAll(): Promise<DesksSchema[]> {
    return this.deskModel.find().exec();
  }

  async findOne(id: string): Promise<DesksSchema> {
    return this.deskModel.findById(id).exec();
  }

  async update(id: string, updatedDeskData: any): Promise<DesksSchema> {
    return this.deskModel.findByIdAndUpdate(id, updatedDeskData, { new: true }).exec();
  }

  async delete(id: string): Promise<DesksSchema> {
    return this.deskModel.findOneAndDelete({ _id: id }).exec();
  }
}
