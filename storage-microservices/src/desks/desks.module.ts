import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DesksController } from './desks.controller';
import { DesksService } from './desks.service';
import { DesksSchema, DeskSchema } from './schemas/desks.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DesksSchema.name, schema: DeskSchema }]),
  ],
  controllers: [DesksController],
  providers: [DesksService],
})
export class DesksModule {}
