/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DesksModule } from './desks/desks.module';
import { StandsModule } from './stands/stands.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  
  imports: [DesksModule,
    MongooseModule.forRoot(process.env.CONNECTIONSTRING),
    StandsModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
