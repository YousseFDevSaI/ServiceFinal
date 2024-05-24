/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Stands extends Document {
  @Prop()
  name: string;

  @Prop()
  material: string;

  @Prop({ default: Date.now })
  dayAddedToStorage: Date;

  @Prop()
  price: number;

  @Prop()
  photo: string;
}

export const StandsSchema = SchemaFactory.createForClass(Stands);
