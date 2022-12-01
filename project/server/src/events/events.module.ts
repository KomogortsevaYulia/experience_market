import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { Tag } from 'src/entities/tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event,Tag])],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
