import { Module } from '@nestjs/common';
import { HackatonsService } from './hackatons.service';
import { HackatonsController } from './hackatons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [HackatonsController],
  providers: [HackatonsService]
})
export class HackatonsModule {}
