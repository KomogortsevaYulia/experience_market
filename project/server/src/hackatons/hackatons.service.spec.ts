import { Test, TestingModule } from '@nestjs/testing';
import { HackatonsService } from './hackatons.service';

describe('HackatonsService', () => {
  let service: HackatonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HackatonsService],
    }).compile();

    service = module.get<HackatonsService>(HackatonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
