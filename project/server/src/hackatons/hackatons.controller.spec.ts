import { Test, TestingModule } from '@nestjs/testing';
import { HackatonsController } from './hackatons.controller';
import { HackatonsService } from './hackatons.service';

describe('HackatonsController', () => {
  let controller: HackatonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HackatonsController],
      providers: [HackatonsService],
    }).compile();

    controller = module.get<HackatonsController>(HackatonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
