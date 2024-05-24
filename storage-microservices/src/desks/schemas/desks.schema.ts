/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DesksSchema extends Document {
  @Prop()
  woodType: string;

  @Prop()
  name: string;

  @Prop({default: Date.now})
  dayAddedToStorage: Date;

  @Prop()
  Price: number;
}

export const DeskSchema = SchemaFactory.createForClass(DesksSchema);
