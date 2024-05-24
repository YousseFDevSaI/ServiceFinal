import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComodsController } from './comods.controller';
import { ComodsService } from './comods.service';
import { Comods, ComodsSchema } from './schemas/comods.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comods.name, schema: ComodsSchema }]),
  ],
  controllers: [ComodsController],
  providers: [ComodsService],
})
export class ComodsModule {}
