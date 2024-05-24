/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { StandsController } from './stands.controller';

describe('StandsController', () => {
  let controller: StandsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StandsController],
    }).compile();

    controller = module.get<StandsController>(StandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
