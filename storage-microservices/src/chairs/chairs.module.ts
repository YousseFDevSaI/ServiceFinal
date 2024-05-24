import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChairsController } from './chairs.controller';
import { ChairsService } from './chairs.service';
import { Chairs, ChairsSchema } from './schemas/chairs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chairs.name, schema: ChairsSchema }]),
  ],
  controllers: [ChairsController],
  providers: [ChairsService],
})
export class ChairsModule {}
