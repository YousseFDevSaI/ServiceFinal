/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Chairs extends Document {
  @Prop()
  material: string;

  @Prop()
  color: string;

  @Prop({ default: Date.now })
  dayAddedToStorage: Date;

  @Prop()
  price: number;
}

export const ChairsSchema = SchemaFactory.createForClass(Chairs);
