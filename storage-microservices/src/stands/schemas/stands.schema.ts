/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Stands extends Document {
  @Prop()
  material: string;

  @Prop()
  name: string;

  @Prop()
  height: number;

  @Prop({ default: Date.now })
  dayAddedToStorage: Date;

  @Prop()
  price: number;
}

export const StandsSchema = SchemaFactory.createForClass(Stands);
