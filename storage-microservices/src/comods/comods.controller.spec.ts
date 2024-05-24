import { Test, TestingModule } from '@nestjs/testing';
import { ComodsController } from './comods.controller';

describe('ComodsController', () => {
  let controller: ComodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComodsController],
    }).compile();

    controller = module.get<ComodsController>(ComodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
