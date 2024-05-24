/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comods extends Document {
  @Prop()
  name: string;

  @Prop()
  material: string;

  @Prop({ default: Date.now })
  dayAddedToStorage: Date;

  @Prop()
  price: number;
}

export const ComodsSchema = SchemaFactory.createForClass(Comods);
