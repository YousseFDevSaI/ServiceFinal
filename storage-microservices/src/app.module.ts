/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DesksModule } from './desks/desks.module';
import { StandsModule } from './stands/stands.module';
import { ChairsModule } from './chairs/chairs.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  
  imports: [
    MongooseModule.forRoot(process.env.CONNECTIONSTRING),
    DesksModule,
    StandsModule,
    ChairsModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
