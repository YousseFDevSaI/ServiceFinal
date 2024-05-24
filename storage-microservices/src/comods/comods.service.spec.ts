import { Test, TestingModule } from '@nestjs/testing';
import { ComodsService } from './comods.service';

describe('ComodsService', () => {
  let service: ComodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComodsService],
    }).compile();

    service = module.get<ComodsService>(ComodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
