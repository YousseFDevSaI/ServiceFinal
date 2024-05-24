/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class DesksService {
    getData(): string {
        return 'Data from the microservice: Desks';
      }
}
