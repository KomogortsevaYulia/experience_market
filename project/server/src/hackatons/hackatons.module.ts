import { Module } from '@nestjs/common';
import { HackatonsService } from './hackatons.service';
import { HackatonsController } from './hackatons.controller';

@Module({
  controllers: [HackatonsController],
  providers: [HackatonsService]
})
export class HackatonsModule {}
