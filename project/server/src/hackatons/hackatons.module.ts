import { Module } from '@nestjs/common';
import { HackatonsService } from './hackatons.service';
import { HackatonsController } from './hackatons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [HackatonsController],
  providers: [HackatonsService]
})
export class HackatonsModule {}
