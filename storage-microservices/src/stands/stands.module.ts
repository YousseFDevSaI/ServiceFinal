import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StandsController } from './stands.controller';
import { StandsService } from './stands.service';
import { Stands, StandsSchema } from './schemas/stands.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Stands.name, schema: StandsSchema }]),
  ],
  controllers: [StandsController],
  providers: [StandsService],
})
export class StandsModule {}
